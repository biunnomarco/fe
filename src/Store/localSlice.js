import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const endpoint = `${process.env.REACT_APP_SERVER_BASE_URL}/local`;

const initialState = {
    locals: [],
    status: 'idle',
}

const localSlice = createSlice({
    name: 'locals',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(postLocal.fulfilled, (state, action) => {
                console.log('ok')
            })
            .addCase(getLocal.fulfilled, (state, action) => {
                state.locals = action.payload
            })
    }
})

export default localSlice.reducer

export const postLocal = createAsyncThunk('local/post', async (postPayload) => {
    console.log(postPayload)

    const postRes = await fetch(`${endpoint}/register`, {
        method: "POST",
        body: JSON.stringify(postPayload),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const res = await postRes.json()
})

//!GET WITH FILTERS
export const getLocal = createAsyncThunk('local/get/filter', async (url) => {
    try {
        const data = await fetch(`${endpoint}/filter?${url}`)
        const res = await data.json()
        console.log(res)
        return res
    } catch (error) {
        console.log(error)
    }
})