import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useRouter } from "next/router"
import { bookSlot } from "../store/slices/slotSlice"
import Calendar from "react-calendar"
import EventCard from "./EventCard"
import Popup from "./Popup"
import {v4 as uuidv4} from "uuid"
import avatar from "../public/assets/7294793.jpg"

export default function MainBoard () {
    const router = useRouter()
    const unitedEvents = useSelector(state => state.slots.data)
    const dispatch = useDispatch()
    const [visibleEvents, setVisibleEvents] = useState ([])
    const [popupIsOpen, setPopupOpen] = useState (false)
    const [popupData, setPopupData] = useState ()

    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const res = await fetch("/api/helloMongo") // Call the API route
            if (!res.ok) {
              throw new Error(`HTTP error! status: ${res.status}`)
            }
            const data = await res.json()
          } catch (error) {
            console.error("Failed to fetch users:", error)
          }
        }    
        fetchUsers()
      }, [])

    useEffect (() => {
        setVisibleEvents([])
    }, [unitedEvents])

    function getClassName ({date, view}) {
        const availableDate = unitedEvents.some( eachDate => eachDate.date.toDateString() === date.toDateString() && eachDate.slots?.some( slot => slot.available === true) )
            ? "available-event-date"
            : null     
        const unavailableDate = unitedEvents.some( eachDate => eachDate.date.toDateString() === date.toDateString() && !eachDate.slots?.some( slot => slot.available === true) )
            ? "unavailable-event-date"
            : null   
        return availableDate || unavailableDate
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
            <div>Welcome block</div>
            <button onClick={() => {router.push('/talks')}}>My talks</button>
            <button onClick={() => {router.push('/mycalendar')}}>My slots</button>
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
            <Popup isOpen={popupIsOpen} data={popupData} setOpen={setPopupOpen} dispatch={dispatch} bookSlot={bookSlot}/>
    </div>
}