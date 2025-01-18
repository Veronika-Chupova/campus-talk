import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: false,
    error: null,
    slots: []
}

const slotSlice = createSlice ({
    name: 'slots',
    initialState,
    reducers: {
        fetchSlotsStart: (state) => { state.loading = true },
        fetchSlotsSuccess: (state, action) => {
            state.loading = false
            state.slots = [...action.payload]
        },
        fetchSlotsFailure: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        bookSlot: (state, action) => {
            const { bookedSlotUserID, bookedSlotDate, bookedSlotStart, bookedSlotEnd } = action.payload || {}
            state.data = state.data.map( item => {
                const itemDateString = item.date.toISOString()
                if ( itemDateString === bookedSlotDate && item.userID === bookedSlotUserID ) {
                    const updatedSlots = item.slots.map( slot => {
                        const currentSlotStart = slot.slotStart.getTime() || null
                        const currentSlotEnd = slot.slotEnd.getTime() || null
    
                        if ( currentSlotStart === bookedSlotStart || currentSlotEnd === bookedSlotEnd ) {
                            return {...slot, available: false}
                        } else {
                            return slot
                        }
                    }) 
                return {...item, slots: updatedSlots}
                } else return item
            })
        },
    },
})

export const { fetchSlotsStart, fetchSlotsSuccess, fetchSlotsFailure, bookSlot } = slotSlice.actions
export default slotSlice.reducer

//slot state.data item 
//  {
//     userID: null,
//     userName: null,
//     userDepartment: null,
//     userAvatar: null,
//     date: null, 
//     start: null, 
//     end: null, 
//     venue: null, 
//     slots: [{
//             slotStart: null,
//             slotEnd: null,
//             duration: 30/60,
//             available: true/false
//      }],
//  } 