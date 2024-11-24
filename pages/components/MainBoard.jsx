import { useState, useEffect } from "react"
import Calendar from "react-calendar"
import EventCard from "./EventCard"
import Popup from "./Popup"
import {v4 as uuidv4} from "uuid"
import avatar from "@/public/assets/7294793.jpg"
// import "react-calendar/dist/Calendar.css"

export default function MainBoard () {
    const [unitedEvents, setUnitedEvents] = useState ([
        {date: new Date(2024, 10, 26), start: new Date('2024-11-26T10:00:00'), end: new Date('2024-11-26T11:00:00'), name:"John Smith", venue:"Department of Biology", slots: []},
        {date: new Date(2024, 10, 29), start: new Date('2024-11-29T10:00:00'), end: new Date('2024-11-29T11:00:00'), name:"Ammy Rodes", venue:"Department of Art", slots: []},
        {date: new Date(2024, 10, 27), start: new Date('2024-11-27T10:00:00'), end: new Date('2024-11-27T11:00:00'), name:"Ali Wanes", venue:"Department of Computer Science", slots: []}
    ])

    useEffect (() => {
        setUnitedEvents (prev => {
            const newArr = prev.map( each => {
                return {...each, slots: [...timeSlicer(each?.start, each?.end, 30), ...timeSlicer(each?.start, each?.end, 60)]} 
            })
            return newArr
        })
    }, [])
    useEffect (() => {
        setVisibleEvents([])
    }, [unitedEvents])

    const [visibleEvents, setVisibleEvents] = useState ([])
    const [popupIsOpen, setPopupOpen] = useState (false)
    const [popupData, setPopupData] = useState ()

    function getClassName ({date, view}) {
        const availableDate = unitedEvents.some( eachDate => eachDate.date.toDateString() === date.toDateString() && eachDate.slots?.some( slot => slot.available === true) )
            ? "available-event-date"
            : null     
        const unavailableDate = unitedEvents.some( eachDate => eachDate.date.toDateString() === date.toDateString() && !eachDate.slots?.some( slot => slot.available === true) )
            ? "unavailable-event-date"
            : null   
        return availableDate || unavailableDate
    }

    function timeSlicer (start, end, duration) {
        const startTime = new Date(start)
        const endTime = new Date (end)
        const slotStartTime = []
        const endPoint = new Date( endTime?.setMinutes( endTime?.getMinutes() - duration ) )
        let currentTime = startTime
        while ( currentTime <= endPoint ) {
            let newDate = new Date (currentTime)
            const slotEnd = new Date ( newDate?.setMinutes( newDate?.getMinutes() + duration ) )
            slotStartTime.push({slotStart: currentTime, slotEnd: slotEnd, duration: duration, available: true})
            currentTime = new Date( slotEnd )
        }
        return slotStartTime
    }

    function handleDayClick (value) {
        const newVisibleEvents = unitedEvents.filter( event => event.date.toDateString() === value.toDateString() )
        setVisibleEvents (newVisibleEvents)
    }

    function handleEventCardClick (data, avatar) {
        setPopupData({...data, avatar: avatar})
        setPopupOpen (true)
    }

    return <div className="main-board">
            <Calendar 
                locale="en-US"
                showNeighboringMonth={false}
                defaultView="month"
                minDetail="month"
                maxDetail="month"
                next2Label={null}
                prev2Label={null}
                tileClassName={getClassName}
                onClickDay={handleDayClick}
            />
            {visibleEvents.map( eachEvent => <EventCard 
                                    key={uuidv4()} 
                                    data={eachEvent} 
                                    avatar={avatar.src}
                                    onClick={handleEventCardClick}
                                />
            )}
            <Popup isOpen={popupIsOpen} data={popupData} setOpen={setPopupOpen} alterEvents={setUnitedEvents}/>
    </div>
}