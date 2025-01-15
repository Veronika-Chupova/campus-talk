import { useRouter } from "next/router"
import { useState } from "react"
import Calendar from "react-calendar"
import { v4 as uuidv4 } from "uuid"
import TimePicker from "../../components/UIElements/TimePicker"

export default function MyCalendar () {
    const router = useRouter()
    const slotStartHours = Array.from( { length: 12}, (_, i) => 9 + i )  //start hour dropdown values - array of numbers from 9 to 20
    const slotStartMinutes = [0, 15, 30, 45]
    const [slotEndHours, setSlotEndHours] = useState (slotStartHours.slice(1))          //end hour dropdown values
    const [slotDate, setSlotDate] = useState ( new Date() )
    const [slotStart, setSlotStart] = useState ()
    const [slotEnd, setSlotEnd] = useState ()
    console.log({
        slotDate,
        slotStart,
        slotEnd
    })

    //styling each day on calendar by passing class
    function getClassName ({ date }) {
        //filter dates and return class for styling
    }

    function handleDayClick (day) {
        //set active class styling
        setSlotDate(day)
    }

    return <>
    <button onClick={() => {router.push('/')}}>Back</button>

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
                <button>Add my slot</button>
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
//slot intersection when creating
//notification about others available slots at this time
