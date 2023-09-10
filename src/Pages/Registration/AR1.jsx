import React, { useState } from 'react'
import { MDBRadio } from 'mdb-react-ui-kit';
import { FindCoordinates } from '../../Hooks/FindCoordinates';
import { nanoid } from 'nanoid';
import JoditEditor from 'jodit-react';
import { useDispatch } from 'react-redux';
import { postArtist } from '../../Store/artistSlice';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBRow,
    MDBInput,
    MDBCheckbox,
    MDBIcon
}
    from 'mdb-react-ui-kit';

function ArtistRegistrationPage() {

    const dispatch = useDispatch()

    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const [members, setMembers] = useState('1');
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [region, setRegion] = useState('');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');
    const [secondPassword, setSecondPassword] = useState('');
    const [band, setBand] = useState(false);

    const [pictures, usePictures] = useState([]);

    //!SET GENRE
    const [genre, setGenre] = useState([]);
    const handleAddGenre = () => {
        const gen = [...genre, '']
        setGenre(gen)
    }
    const handleChangeGenre = (e, i) => {
        const inputdata = genre
        inputdata[i] = e.target.value;
        setGenre(inputdata)
    }
    const handleRemoveGenre = (i) => {
        const delGen = [...genre]
        delGen.splice(i, 1)
        setGenre(delGen)
    }
    //!SET INSTRUMENT
    const [instrument, setInstrument] = useState([]);
    const handleAddInstrument = () => {
        const inst = [...instrument, '']
        setInstrument(inst)
    }
    const handleChangeInstrument = (e, i) => {
        const inputdata = instrument
        inputdata[i] = e.target.value;
        setInstrument(inputdata)
    }
    const handleRemoveInstrument = (i) => {
        const delInst = [...instrument]
        delInst.splice(i, 1)
        setInstrument(delInst)
    }

    const sendRegister = async () => {

        if (secondPassword === password) {
            const coordinates = await FindCoordinates(`${region} ${city} ${address}`)

            const registerForm = {
                email: mail,
                password: password,
                members: members,
                name: name,
                genre: genre,
                region: region,
                city: city,
                address: address,
                instrument: instrument,
                lat: coordinates.lat,
                lon: coordinates.lon,
                description: description,
            }

            console.log(registerForm)
            dispatch(postArtist(registerForm))

        } else console.log("psw diverse")
    }



    return (
        <MDBContainer fluid style={{backgroundColor: 'blanchedalmond'}}>

            <div className="p-5 bg-image" style={{ backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '300px' }}></div>

            <MDBCard className='mx-3 mb-5 p-5 shadow-5' style={{ marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)' }}>
                <MDBCardBody className='p-3 text-center'>

                    <h2 className="fw-bold mb-5">Register Now</h2>

                    <MDBRow>
                        <MDBCol col='12'>
                            <div className='pe-2'>Are you a solo or a band?</div>
                            <MDBRadio wrapperClass='mb-4' onClick={() => { setBand(false); setMembers(1) }} name='typeRadio' id='inlineRadio1' value='option1' label='Solo' inline />
                            <MDBRadio wrapperClass='mb-4' onClick={() => setBand(true)} name='typeRadio' id='inlineRadio2' value='option2' label='Band' inline />
                        </MDBCol>
                        {band === true && (
                            <div>
                                <div>How many members?</div>
                                <MDBRadio wrapperClass='mb-4' onClick={() => setMembers('2')} name='members' id='inlineRadio2' value='option2' label='2' inline />
                                <MDBRadio wrapperClass='mb-4' onClick={() => setMembers('3')} name='members' id='inlineRadio2' value='option2' label='3' inline />
                                <MDBRadio wrapperClass='mb-4' onClick={() => setMembers('4')} name='members' id='inlineRadio2' value='option2' label='4' inline />
                                <MDBRadio wrapperClass='mb-4' onClick={() => setMembers('5')} name='members' id='inlineRadio2' value='option2' label='5' inline />
                                <MDBRadio wrapperClass='mb-4' onClick={() => setMembers('6+')} name='members' id='inlineRadio2' value='option2' label='6+' inline />
                            </div>
                        )}
                    </MDBRow>

                    <MDBRow>
                        <MDBCol col='12' md={12} lg={4}>
                            <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='text' />
                        </MDBCol>

                        <MDBCol col='12' md={6} lg={4}>
                            <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='text' />
                        </MDBCol>

                        <MDBCol col='12' md={6} lg={4}>
                            <MDBInput wrapperClass='mb-4' label='Repeat Password' id='form1' type='text' />
                        </MDBCol>
                    </MDBRow>



                    <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text' placeholder='Insert your name, artist name or band name' />

                    <MDBRow>
                        <MDBCol col='12' md={6} lg={4}>
                            <MDBInput wrapperClass='mb-4' label='Region' id='form1' type='text' />
                        </MDBCol>

                        <MDBCol col='12' md={6} lg={4}>
                            <MDBInput wrapperClass='mb-4' label='City' id='form1' type='text' />
                        </MDBCol>

                        <MDBCol col='12' md={12} lg={4}>
                            <MDBInput wrapperClass='mb-4' label='Address' id='form1' type='text' />
                        </MDBCol>
                    </MDBRow>

                    <MDBRow className='d-flex align-items-center mb-4'>
                        <MDBCol col='12'>
                            <span>What kind of music do you play?</span> <MDBBtn color='success' size='sm' onClick={() => handleAddGenre()}>Add a Genre</MDBBtn>
                        </MDBCol>
                        <span style={{ fontSize: '0.8em' }}> <em> You can add any number of genres</em></span>
                    </MDBRow>
                    <MDBRow>
                        {genre.map((data, i) => {
                            return (
                                <MDBCol col='12' md={6} lg={4} style={{ position: 'relative' }}>
                                    <MDBInput wrapperClass='mb-4' label='Genre' id='form1' type='text' onChange={(e) => handleChangeGenre(e, i)} />
                                    <MDBBtn color='danger' className='mt-1' size='sm' style={{ position: 'absolute', top: '0', right: '-5px' }} onClick={() => handleRemoveGenre(i)}>x</MDBBtn>
                                </MDBCol>
                            )
                        })}
                    </MDBRow>
                    <MDBRow className='d-flex align-items-center mb-4'>
                        <MDBCol col='12'>
                            <span>What instruments do you play?</span> <MDBBtn color='success' size='sm' onClick={() => handleAddInstrument()}>Add an instrument</MDBBtn>
                        </MDBCol>
                        <span style={{ fontSize: '0.8em' }}> <em> You can add any number of instruments</em></span>
                    </MDBRow>
                    <MDBRow>
                        {instrument.map((data, i) => {
                            return (
                                <MDBCol col='12' md={6} lg={4} style={{ position: 'relative' }}>
                                    <MDBInput wrapperClass='mb-4' label='Instrument' id='form1' type='text' onChange={(e) => handleChangeInstrument(e, i)} />
                                    <MDBBtn color='danger' className='mt-1' size='sm' style={{ position: 'absolute', top: '0', right: '-5px' }} onClick={() => handleRemoveInstrument(i)}>x</MDBBtn>
                                </MDBCol>
                            )
                        })}
                    </MDBRow>

                    <div className="mb-3">
                        <h4>Add a description of yourself! Anithing you want!</h4>
                        <JoditEditor
                            tabIndex={4}
                            onBlur={newDescription => setDescription(newDescription)}
                            onChange={newDescription => { }}
                        />
                    </div>

                    <div className='d-flex justify-content-center mb-4'>
                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                    </div>

                    <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn>


                </MDBCardBody>
            </MDBCard>

        </MDBContainer>
    );
}

export default ArtistRegistrationPage;