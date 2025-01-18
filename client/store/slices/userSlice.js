import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: false,
    error: null,
    id: null,
    isAuthenticated: false,
    firstName: null,
    lastName: null,
    avatar: null,
    department: null,
    research: null,
    interests: null,
    email: null,
    plannedMeetings:[],
    pastMeetings:[],
    slots:[],
}

const userSlice = createSlice ({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { id, email } = action.payload || {}
            if ( id && email ) {
                return {... state, id, email, isAuthenticated: true }
            }
            return state
        },
        clearUser: (state) => {
            return {...state, ...initialState}
        },
        fetchUserStart: (state) => { state.loading = true },
        fetchUserSuccess: (state, action) => {
            return {...state, ...action.payload, loading: false }
        },
        fetchUserFailure: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
    },
})

export const { setUser, clearUser, fetchUserStart, fetchUserSuccess, fetchUserFailure } = userSlice.actions
export default userSlice.reducer