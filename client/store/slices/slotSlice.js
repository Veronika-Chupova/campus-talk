import { createSlice } from "@reduxjs/toolkit"

const slotSlice = createSlice ({
    name: 'slots',
    initialState: {
        loading: false,
        error: null,
        data: [{
            date: new Date(2025, 0, 26), start: new Date('2025-01-26T10:00:00'), 
            end: new Date('2025-01-26T11:00:00'), 
            name:"John Smith", 
            userID: "1", 
            venue:"Department of Biology", 
            slots: [{
                slotStart: new Date('2025-01-26T10:00:00'),
                slotEnd: new Date('2025-01-26T11:30:00'),
                duration: 30,
                available: true,
            },
            {
                slotStart: new Date('2025-01-26T10:30:00'),
                slotEnd: new Date('2025-01-26T11:00:00'),
                duration: 30,
                available: true,
            },
            {
                slotStart: new Date('2025-01-26T10:00:00'),
                slotEnd: new Date('2025-01-26T11:00:00'),
                duration: 60,
                available: true,
            }],
        },
        {
            date: new Date(2025, 0, 29), 
            start: new Date('2025-01-29T10:00:00'), 
            end: new Date('2025-01-29T11:00:00'), 
            name:"Ammy Rodes", 
            userID: "2", 
            venue:"Department of Art", 
            slots: [{
                slotStart: new Date('2025-01-29T10:00:00'),
                slotEnd: new Date('2025-01-29T11:30:00'),
                duration: 30,
                available: true,
            },
            {
                slotStart: new Date('2025-01-29T10:30:00'),
                slotEnd: new Date('2025-01-29T11:00:00'),
                duration: 30,
                available: true,
            },
            {
                slotStart: new Date('2025-01-29T10:00:00'),
                slotEnd: new Date('2025-01-29T11:00:00'),
                duration: 60,
                available: true,
            }]
        },
        {
            date: new Date(2025, 0, 27), 
            start: new Date('2025-01-27T10:00:00'), 
            end: new Date('2025-01-27T11:00:00'), 
            name:"Ali Wanes", 
            userID: "3", 
            venue:"Department of Computer Science", 
            slots: [{
                slotStart: new Date('2025-01-27T10:00:00'),
                slotEnd: new Date('2025-01-27T11:30:00'),
                duration: 30,
                available: true,
            },
            {
                slotStart: new Date('2025-01-27T10:30:00'),
                slotEnd: new Date('2025-01-27T11:00:00'),
                duration: 30,
                available: true,
            },
            {
                slotStart: new Date('2025-01-27T10:00:00'),
                slotEnd: new Date('2025-01-27T11:00:00'),
                duration: 60,
                available: true,
            }]
        }],
    },
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