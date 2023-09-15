import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ArtistRegistrationPage from './ArtistRegistrationPage'
import jam from '../../assets/registrationPage.jpg'

const RegistrationPage = () => {
    return (
            <Container fluid
                className='row m-0 d-flex align-items-center'
                style={{
                    /* width: '100%', */
                    minHeight: '90vh',
                    backgroundImage: `url(${jam})`,
                    backgroundPosition: 'top right',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}>
                <div
                    className='box col-md-6 offset-md-3 d-flex flex-column justify-content-center align-items-center py-5'
                    style={{
                        borderRadius: '20px',
                        backgroundColor: 'rgb(255 255 255 / 70%)',
                        height: '50vh'
                    }}>
                    <div className='text-center'>
                        <h1>Sei un musicista?</h1>
                        <Link to={'/artistRegistration'}><Button style={{backgroundColor: 'rgb(198 109 111)'}}>REGISTATI</Button></Link>
                    </div>
                    <hr />
                    <p>oppure</p>
                    <div className='text-center'>
                        <h1>Gestisci un locale?</h1>
                        <Link to={'/localRegistration'}><Button style={{backgroundColor: 'rgb(198 109 111)'}}>REGISTATI</Button></Link>
                    </div>
                </div>

            </Container>
    )
}

export default RegistrationPage