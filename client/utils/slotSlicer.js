export default function slotSlicer (start, end, duration) {
    const startTime = new Date( start )
    const endTime = new Date( end )
    const chunks = []
    const endPoint = new Date( endTime.setMinutes( endTime.getMinutes() - duration ) )
    let currentTime = new Date( startTime )
    while ( currentTime <= endPoint ) {
        let newDate = new Date (currentTime)
        const slotEnd = new Date ( newDate.setMinutes( newDate.getMinutes() + duration ) )
        chunks.push({
            chunkStart: new Date( currentTime ), 
            chunkEnd: new Date( slotEnd ), 
            durationMinutes: parseInt( duration, 10), 
            available: true
        })
        currentTime = new Date( slotEnd )
    }
    return chunks
}
