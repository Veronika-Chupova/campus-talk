import { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import {v4 as uuidv4} from "uuid"

export default function Popup ({data, isOpen, setOpen, alterEvents}) {
    const name = data?.name
    const date = data?.date
    const start = data?.start
    const end = data?.end
    const venue = data?.venue
    const avatar = data?.avatar
    const slots = data?.slots
    const [activeDuration, setDuration] = useState (30)
    const [visibleSlot, setVisibleSlot] = useState([])
    const [durationStyle, setDurationStyle] = useState ({
        half: "lightblue",
        hour: "white"
    })
    const [slotStyle, setSlotStyle] = useState ()
    const [chosenSlot, setChosenSlot] = useState()

    useEffect (() => {
        if (slots) {
            setVisibleSlot (slots.filter( slot => slot?.duration === activeDuration && slot.available ))
        }
    }, [slots, activeDuration])

    function slotTransformer(slot) {
        const start = new Date (slot?.slotStart)
        const end = new Date (start?.setMinutes( start?.getMinutes() + Number(slot?.duration)) )
        const startString = slot?.slotStart?.toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit"
        })
        const endString = end.toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit"
        })
        return startString + "-" + endString
    }

    function handleDurationClick (event) {
        const name = event.target.getAttribute('name')
        if ( name === "half" && activeDuration === 60 ) {
            setDuration(30)
            setDurationStyle(prev => {
                return {half: "lightblue", hour: "white"}
            })
            setSlotStyle()
            setChosenSlot()
        } else if ( name === "hour" && activeDuration === 30 ) {
            setDuration (60)
            setDurationStyle(prev => {
                return {half: "white", hour: "lightblue"}
            })
            setSlotStyle()
            setChosenSlot()
        }
    }

    function handleSlotClick (index) {
        if ( Number(slotStyle) !== Number(index) ) {
            setSlotStyle(Number(index))
            setChosenSlot(visibleSlot[index])
        }
    }

    function handleBooking () {
        if (chosenSlot) {
            alterEvents (prev => {
                const newEvents = prev.map( event => {
                    if ( event?.start === start && event?.name === name ) {
                        const updatedSlots = event?.slots.map( slot => {
                            if ( slot?.slotStart?.getTime() === chosenSlot?.slotStart?.getTime() || slot?.slotEnd?.getTime() === chosenSlot?.slotEnd?.getTime() ) {
                                
                               return {...slot, available: false}
                            } else {
                                return slot
                            }
                        })
                        return {...event, slots: updatedSlots}
                    } else {
                        return event
                    }
                })
                return newEvents
            })
            setSlotStyle()
            setChosenSlot()
            setOpen(false)
        }
    }

    if (!isOpen) return null

    return ReactDOM.createPortal(
    <div style={{"zIndex":"1000", "position":"fixed","top":"0", "left": "0","height":"100vh", "width":"100%", "backgroundColor":"rgb(0, 0, 0, 0.5)"}}>
        <div style={{"backgroundColor":"white", "margin":"50px auto"}}>
            <h3>Book a Talk</h3>
            <div>
                <div style={{"display":"flex", "gap":"10px"}}>
                    <img src={avatar} style={{"width":"50px","height":"50px"}}/>
                    <h5>{name}</h5>
                </div>
                <div style={{"display":"flex","flexDirection":"column", "gap":"10px"}}>
                    <div style={{"display":"flex", "gap":"10px"}}>
                        <span style={{"width":"80px"}}>DATE</span>
                        <span>{date?.toDateString()}</span>
                    </div>
                    <div style={{"display":"flex", "gap":"10px"}}>
                        <span style={{"width":"80px"}}>SLOT</span>
                        <span>TIME TO STRING</span>
                    </div>
                    <div style={{"display":"flex", "gap":"10px"}}>
                        <span style={{"width":"80px"}}>VENUE</span>
                        <span>{venue}</span>
                    </div>
                </div>
            </div>
            <div style={{"displa":"flex", "gap":"10px"}}>
                <div style={{"display":"flex","flexDirection":"column", "gap":"10px"}}>
                    <label>First Name</label>
                    <input type="text" placeholder="YOUR FIRST NAME HERE"/>
                    <label>Last Name</label>
                    <input type="text" placeholder="YOUR LAST NAME HERE" />
                </div>
                <div style={{"display":"flex","flexDirection":"column", "gap":"10px"}}>
                    <label>Time</label>
                    <div style={{"display":"flex", "flexDirection":"row", "gap":"10px"}}>
                        {visibleSlot?.length > 0 
                        ? visibleSlot.map( (slot, index) => <div key={uuidv4()} onClick={()=>handleSlotClick(index)} style={index===slotStyle? {"border":"1px solid blue", "backgroundColor":"lightblue"} : {"border":"1px solid blue"}}>
                            {slotTransformer(slot)}
                        </div>)
                        : "No available slots"
                        }
                    </div>
                    <label>Duration</label>
                    <div style={{"display":"flex", "flexDirection":"row", "gap":"10px"}}>
                        <div onClick={handleDurationClick} name="half" style={{"border":"1px solid blue", "backgroundColor": durationStyle?.half}}>30 min</div>
                        <div onClick={handleDurationClick} name="hour" style={{"border":"1px solid blue", "backgroundColor": durationStyle?.hour}}>1 hour</div>
                    </div>
                </div>
            </div>
            <div style={{"display":"flex","flexDirection":"row", "gap":"10px", "margin":"20px auto", "justifyContent":"space-around"}}>
                <button onClick={handleBooking} style={{"backgroundColor":"green"}}>BOOK</button>
                <button onClick={()=>setOpen(false)} style={{"backgroundColor":"red"}}>CANCEL</button>
            </div>
        </div>
    </div>
    , document.body)
}