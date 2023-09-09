import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const endpoint = `${process.env.REACT_APP_SERVER_BASE_URL}/artist`

const initialState = {
    artists: [],
    status: 'idle'
}

const artistSlice = createSlice({
    name: 'artists',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
         .addCase(postArtist.fulfilled, (state, action) => {
            console.log('ok')
         })
    }
})

export default artistSlice.reducer;

export const postArtist = createAsyncThunk('artist/post', async (postPayload) => {
    
   /*  const data = new FormData()
    data.append('email', postPayload.email)
    data.append('password', postPayload.password)
    data.append('members', postPayload.members)
    data.append('name', postPayload.name)
    data.append('genre', postPayload.genre)
    data.append('region', postPayload.region)
    data.append('city', postPayload.city)
    data.append('address', postPayload.address)
    data.append('instrument', postPayload.instrument)
    data.append('lat', postPayload.lat)
    data.append('lon', postPayload.lon)
    data.append('description', postPayload.description) */

    console.log(postPayload)
    

    const postRes = await fetch(`${endpoint}/register`, {
        method: "POST",
        body: JSON.stringify(postPayload),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const res = await postRes.json()
})