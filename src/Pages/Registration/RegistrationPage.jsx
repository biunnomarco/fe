import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ArtistRegistrationPage from './ArtistRegistrationPage'

const RegistrationPage = () => {
    return (
        <>
            <Row style={{ width: '100wh', height: '65vh' }}>
                <div className='col-12 col-md-6 d-flex justify-content-center align-items-center'>
                    <div className='text-center px-5'>
                        <h1>Sei un musicista e cerchi un locale dove esibirti?</h1>
                        <Link to={'/artistRegistration'}><Button variant='success'>REGISTATI</Button></Link>
                    </div>
                </div>
                <div className='col-12 col-md-6 d-flex justify-content-center align-items-center'>
                    <div className='text-center px-5'>
                        <h1>Gestisci un locale e cerchi un musicista per la tua serata?</h1>
                        <Link to={'/localRegistration'}><Button variant='success'>REGISTATI</Button></Link>
                    </div>
                </div>
            </Row>
            

        </>
    )
}

export default RegistrationPage