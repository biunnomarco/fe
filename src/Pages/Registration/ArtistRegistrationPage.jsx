import React, { useState } from 'react'
import { MDBRadio } from 'mdb-react-ui-kit';
import { FindCoordinates } from '../../Hooks/FindCoordinates';
import { nanoid } from 'nanoid';
import JoditEditor from 'jodit-react';
import { useDispatch } from 'react-redux';
import { postArtist } from '../../Store/artistSlice';

const ArtistRegistrationPage = () => {

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
        <>
            <div>ArtistRegistrationPage</div>
            <hr />

            <div className="mb-3">
                <label>Email</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Email"
                    onChange={(e) => setMail(e.target.value)}

                />
            </div>

            <div className="mb-3">
                <label>Password</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Password"
                    onChange={(e) => setPassword(e.target.value)}

                />
            </div>
            <div className="mb-3">
                <label>Repete Password</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Password"
                    onChange={(e) => setSecondPassword(e.target.value)}

                />
            </div>

            <div>
                <div>Are you a solo ora a Band</div>
                <MDBRadio onClick={() => { setBand(false); setMembers(1) }} name='typeRadio' id='inlineRadio1' value='option1' label='Solo' inline />
                <MDBRadio onClick={() => setBand(true)} name='typeRadio' id='inlineRadio2' value='option2' label='Band' inline />
            </div>
            {band === true && (
                <div>
                    <div>How many members?</div>
                    <MDBRadio onClick={() => setMembers('2')} name='members' id='inlineRadio2' value='option2' label='2' inline />
                    <MDBRadio onClick={() => setMembers('3')} name='members' id='inlineRadio2' value='option2' label='3' inline />
                    <MDBRadio onClick={() => setMembers('4')} name='members' id='inlineRadio2' value='option2' label='4' inline />
                    <MDBRadio onClick={() => setMembers('5')} name='members' id='inlineRadio2' value='option2' label='5' inline />
                    <MDBRadio onClick={() => setMembers('6+')} name='members' id='inlineRadio2' value='option2' label='6+' inline />
                </div>
            )}
            <div className="mb-3">
                <label>Name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Solo or Band name"
                    onChange={(e) => setName(e.target.value)}

                />
            </div>
            <div className='bg-primary'>
                <div>Whera are you located?</div>
                <div className="mb-3">
                    <label>Region</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Region"
                        onChange={(e) => setRegion(e.target.value)}

                    />
                </div>
                <div className="mb-3">
                    <label>City</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Region"
                        onChange={(e) => setCity(e.target.value)}

                    />
                </div>
                <div className="mb-3">
                    <label>Address</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Region"
                        onChange={(e) => setAddress(e.target.value)}

                    />
                </div>
            </div>

            <div>
                <p>What kind of music do you play?</p>
                <button onClick={() => handleAddGenre()}>Add a Genre</button>
                {genre.map((data, i) => {
                    return (
                        <div key={nanoid()}>

                            <input
                                type="text"
                                placeholder={data}
                                onChange={(e) => handleChangeGenre(e, i)}
                            />
                            <button onClick={() => handleRemoveGenre(i)}>x</button>
                        </div>
                    )
                })}

            </div>

            <div>
                <p>What instruments do you play?</p>
                <button onClick={() => handleAddInstrument()}>Add an Instrument</button>
                {instrument.map((data, i) => {
                    return (
                        <div key={nanoid()}>

                            <input
                                type="text"
                                placeholder={data}
                                onChange={(e) => handleChangeInstrument(e, i)}
                            />
                            <button onClick={() => handleRemoveInstrument(i)}>x</button>
                        </div>
                    )
                })}
            </div>
            <div className="mb-3">
                <label>Add a description</label>
                <JoditEditor
                    tabIndex={1}
                    onBlur={newDescription => setDescription(newDescription)}
                    onChange={newDescription => { }}
                />
            </div>

            <div className="d-grid mb-4">
                <button onClick={() => sendRegister()} className="btn btn-success">
                    Register
                </button>
            </div>



        </>
    )
}

export default ArtistRegistrationPage