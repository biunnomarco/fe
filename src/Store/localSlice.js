import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const endpoint = `${process.env.REACT_APP_SERVER_BASE_URL}/local`;

const initialState = {
    locals: [],
    loggedLocal: null,
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
            .addCase(getLocalById.fulfilled, (state, action) => {
                state.loggedLocal = action.payload
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

//!CHANGE PROPIC
export const changeLocalProPic = createAsyncThunk('local/patch/proPic', async (patchData) => {
    console.log(patchData)
    const form = new FormData()
    form.append('proPic', patchData.proPic)

    const res = await fetch(`${endpoint}/changeProPic/${patchData.id}`,
        {
            method: 'PATCH',
            body: form,
            headers: {}
        })
    const data = await res.json()
})

//! GET BY ID
export const getLocalById = createAsyncThunk('local/get/id', async(id) => {
    try {
        const data = await fetch(`${endpoint}/byId/${id}`)
        const res = await data.json()
        return res
    } catch (error) {
        console.log(error)
    }
    
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