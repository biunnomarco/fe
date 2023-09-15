import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const endpoint = `${process.env.REACT_APP_SERVER_BASE_URL}/event`;

const initialState = {
    events: [],
    status: 'idle'
}

const eventSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllEvents.fulfilled, (state, action) => {
                state.events = action.payload
            })
    }
})

export default eventSlice.reducer;

export const getAllEvents = createAsyncThunk('event/get/all', async () => {
    try {
        const data = await fetch(`${endpoint}/allEvents`)
        const res = await data.json()
        return res
    } catch (error) {
        console.log(error)
    }
})

export const postEvent = createAsyncThunk('event/post', async (postPayload) => {
    try {
        const postRes = await fetch(`${endpoint}/newEvent`, {
            method: "POST",
            body: JSON.stringify(postPayload),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const res = await postRes.json()
    } catch (error) {
        console.log(error)
    }
})