import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice ({
    name: 'user',
    initialState: {
        loading: false,
        error: null,
        id: null,
        name: null,
        avatar: null,
        department: null,
        research: null,
        email: null,
        plannedMeetings:[],
        pastMeetings:[],
        slots:[],
    },
    reducers: {
        fetchUserStart: (state) => { state.loading = true },
        fetchUserSuccess: (state, action) => {
            state.loading = false
            return {...state, ...action.payload }
        },
        fetchUseFailure: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
    },
})

export const { fetchUserStart, fetchUserSuccess, fetchUseFailure } = userSlice.actions
export default userSlice.reducer