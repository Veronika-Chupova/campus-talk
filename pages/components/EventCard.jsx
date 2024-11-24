export default function EventCard ({data, avatar, onClick}) {
    const {date, name, venue, start, end, slots} = data || {}
    const startTimeString = start?.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit"
    })
    const endTimeString = end?.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit"
    })
    const fullSlotString = startTimeString?.concat ("-",endTimeString)
    return <div style={{"display":"flex"}}>
        <div style={{"display":"flex","flexDirection":"row"}}>
            <img src={avatar} style={{"width":"50px", "height":"50px"}}/>
            <div style={{"display":"flex", "flexDirection":"column"}}>
                <p>{name}</p>
                <p>{date?.toDateString()+" "+fullSlotString}</p>
                <p>{venue}</p>
            </div>
        </div>
        {slots?.some( slot => slot.available === true) && <button onClick={()=>onClick(data, avatar)} style={{"width":"60px", "height":"50px"}}>BOOK</button>}
    </div>
}