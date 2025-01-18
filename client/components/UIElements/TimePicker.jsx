import { v4 as uuidv4 } from "uuid"
import { useState, useEffect } from 'react'

export default function TimePicker ({ hours, minutes, setSlotData, slotDate }) {
    const initialTime = {
        hour: "",
        minute: "",
    }
    const [selectedTime, setSelectedTime] = useState (initialTime)
    const year = slotDate.getFullYear() || 0
    const month = slotDate.getMonth() || 0
    const day = slotDate.getDate() || 0

    useEffect( () => {
        if ( !(selectedTime.hour === "" && selectedTime.minute === "") ) {
            const { hour, minute } = selectedTime
            const slotTime = new Date(year, month, day, hour, minute)
            setSlotData(prev => slotTime)
        }
    }, [selectedTime])
    useEffect( () => {
        setSelectedTime (initialTime)
    }, [slotDate])

    function amPmGenerator (hour) {
        if (hour < 12) return hour + 'am'
        if (hour > 12) return (hour - 12) + 'pm'
        return hour + "pm"
    }

    function handleSelectChange(e) {
        const { name, value } = e.target || {}
        setSelectedTime( prev => {
            return {...prev, [name]: value}
        })
    }
    return <>
        <select onChange={handleSelectChange} name="hour" value={selectedTime.hour}>
            <option key={uuidv4()} value="" disabled></option>
            {hours.map( hour => <option key={uuidv4()} value={hour}>{amPmGenerator(hour)}</option>)} 
        </select>  
        <p>:</p>
        <select onChange={handleSelectChange} name="minute" value={selectedTime.minute}>
            <option key={uuidv4()} value="" disabled></option>
            {minutes.map( min => <option key={uuidv4()} value={min}>{min ? String(min) : "00"}</option>)}
        </select>
    </>
}

//check if end time is greater than start time
