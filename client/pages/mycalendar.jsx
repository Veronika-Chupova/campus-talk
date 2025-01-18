import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Calendar from "react-calendar"
import { v4 as uuidv4 } from "uuid"
import TimePicker from "../components/UIElements/TimePicker"
import BackButton from "../components/UIElements/BackButton"
import { newSlotSubmitAPI, getSlotsAPI } from "../services/apiService.js/apiService"
import { fetchSlotsStart, fetchSlotsSuccess, fetchSlotsFailure } from "../store/slices/slotSlice"

export default function MyCalendar () {
    const router = useRouter()
    const dispatch = useDispatch()
    const { id } = useSelector ( state => state.user)
    const slotsData = useSelector (state => state.slots.slots)
    console.log("Slots data from redux", slotsData)
    const slotStartHours = Array.from( { length: 12}, (_, i) => 9 + i )  //start hour dropdown values - array of numbers from 9 to 20
    const slotStartMinutes = [0, 15, 30, 45]
    const [slotEndHours, setSlotEndHours] = useState (slotStartHours.slice(1))          //end hour dropdown values
    const [slotDate, setSlotDate] = useState ( new Date() )
    const [slotStart, setSlotStart] = useState ()
    const [slotEnd, setSlotEnd] = useState ()
    const [isReadySlot, setIsReadySlot] = useState( false )
    const [isInserted, setIsInserted] = useState ( false )

    useEffect( () => {
        if (slotDate && slotStart && slotEnd) setIsReadySlot( true )
        else setIsReadySlot( false )
    }, [slotDate, slotStart, slotEnd])

    useEffect( () => {
        if (isInserted) {
            async function fetchSlots () {
              try {
                dispatch( fetchSlotsStart() )  
                const slots = await getSlotsAPI()
                if (slots) {
                  dispatch( fetchSlotsSuccess(slots) )
                } else {
                  dispatch( fetchSlotsFailure("No data") )
                }
                return true
              } catch (error) {
                console.error("Fetching data failed:", error)
                dispatch( fetchSlotsFailure(error) )
                return false
              }
            }
            fetchSlots ()
        }
        setIsInserted(false)
    }, [isInserted])

    //styling each day on calendar by passing class
    function getClassName ({ date }) {
        //filter dates and return class for styling
    }

    function handleDayClick (day) {
        //set active class styling
        setSlotDate(day)
        setSlotStart()
        setSlotEnd()
    }

    async function handleSlotSubmission (e) {
        e.preventDefault()
        if (isReadySlot) {
            const data = {
                id,
                slotDate,
                slotStart,
                slotEnd,
                status: "active"
            }
            try {
                const slotCreation = await newSlotSubmitAPI(data)
                if (slotCreation === true) {
                    console.log("Slot creation status", slotCreation)
                    setIsInserted(true)
                }
            } catch (error) {
                setIsAPISuccess ( false )
            }
        }
    }

    return <>
    <BackButton />

    <div className='card-container'>
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
    </div>

    <div className='card-container'>
        <h2>Choose time</h2>
        <div className='slot-creation-property-container'>
            <p>Duration</p>
            <div className='slot-creation-attr-block'>
                <p>1 hour</p>
            </div>
        </div>
        <div className='slot-creation-attr-container'>
            <p>Time</p>
            <div className='slot-creation-attr-block'>
                <div className='slot-creation-attr-chunk'>
                    <p>From</p>
                    <TimePicker 
                        hours={slotStartHours} 
                        minutes={slotStartMinutes}
                        setSlotData={setSlotStart}
                        slotDate={slotDate}
                    />
                </div>
                <div className='slot-creation-attr-chunk'>
                    <p>To</p>
                    <TimePicker 
                        hours={slotEndHours} 
                        minutes={slotStartMinutes}
                        setSlotData={setSlotEnd}
                        slotDate={slotDate}
                    />
                </div>
                <button onClick={handleSlotSubmission}>Add my slot</button>
            </div>
        </div>
    </div>
    <div className='card-container'>
        <div>My slots</div>
    </div>
    <div className='card-container'>
        My planned meetings
    </div>
</>
}

//work around
//restrict 1 months left and right (minDate and maxDate is not working for this)
//check if slot allows at least 1 duration span (60 minutes currently)
//slot intersection when creating
//notification about others available slots at this time
//unset time after successful submission - need to be done with TimePicker component
