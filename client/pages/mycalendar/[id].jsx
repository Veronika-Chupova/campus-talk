import Calendar from "react-calendar"

export default function MyCalendar () {
    return <Calendar 
    locale="en-US"
    showNeighboringMonth={false}
    defaultView="month"
    minDetail="month"
    maxDetail="month"
    next2Label={null}
    prev2Label={null}
    tileClassName={null}
    onClickDay={null}
/>
}