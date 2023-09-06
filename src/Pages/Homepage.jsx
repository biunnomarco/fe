import React, { useState } from 'react'
import { FindCoordinates, DistanceBetween } from '../Hooks/FindCoordinates'
import ArtistRegistrationForm from '../Components/RegistrationForms/ArtistRegistrationForm'

const Homepage = () => {

    const [city, setCity] = useState('')

    const gobaby = async (city) => {
        const coordinates = await FindCoordinates(city);
        console.log(coordinates)
        const distance = DistanceBetween(coordinates.lat, coordinates.lon, 45.54451325, 9.167620729961163)
        console.log(distance)
    }

    return (
        <div className='d-flex flex-column align-items-center'>
            <div>Homepage</div>
            <input onChange={(e) => setCity(e.target.value)} type="text" />
            <button onClick={()=> gobaby(city)}>Click</button>
            
            <ArtistRegistrationForm />
        </div>

    )
}

export default Homepage