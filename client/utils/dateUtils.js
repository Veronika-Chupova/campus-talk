export function timeSlicer (start, end, duration) {
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
