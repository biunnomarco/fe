import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { MDBBtn, MDBInput, MDBIcon } from 'mdb-react-ui-kit';
import { useDispatch } from 'react-redux';
import { getLocal } from '../../Store/localSlice';
import { MDBRange, MDBRadio } from 'mdb-react-ui-kit';
import { useSession } from '../../Middlewares/ProtectedRoutes';

function Example() {
    const session = useSession();
    const dispatch = useDispatch();

    const [band, setBand] = useState(false);
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [backline, setBackline] = useState('');
    const [distance, setDistance] = useState('300');
    const [type, setType] = useState('');
    const [city, setCity] = useState('');
    const [region, setRegion] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const createUrl = () => {
       const url = `name=${name}&favouriteGenre=${genre}&backline=${backline}&distance=${distance}&lat=${session.lat}&lon=${session.lon}&region=${region}&city=${city}&localType=${type}`
        dispatch(getLocal(url))
        console.log(url)
    }

    return (
        <>
            
            <MDBIcon className='mt-3 ms-2 mb-2 me-2' size='lg' fas icon="search" onClick={handleShow} />

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>ArtistSearchOffCanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <h3>Filter</h3>
                    <div>
                        <MDBInput onChange={(e) => setName(e.target.value)} wrapperClass='mb-4' label='Name' id='form1' type='text' />
                        <MDBInput onChange={(e) => setType(e.target.value)} label='Local Type' id='form1' type='text' />
                        <span style={{fontSize: '0.6rem' }}> <em>Es. pizzeria, pub, bar ecc</em> </span>
                        <MDBInput onChange={(e) => setGenre(e.target.value)} wrapperClass='mb-4 mt-3' label='Genre' id='form1' type='text' />
                        <MDBInput onChange={(e) => setBackline(e.target.value)} wrapperClass='mb-4' label='Backline' id='form1' type='text' />
                        <MDBRange
                            min='1'
                            max='300'
                            step='5'
                            id='customRange3'
                            label='Set distance'
                            defaultValue={300}
                            onChange={(e) => setDistance(e.target.value)}
                        />
                    </div>
                    <div>
                        <MDBInput onChange={(e) => setRegion(e.target.value)} wrapperClass='mb-4' label='Region' id='form1' type='text' />
                        <MDBInput onChange={(e) => setCity(e.target.value)} wrapperClass='mb-4' label='City' id='form1' type='text' />

                    </div>
                    <MDBBtn color='success' onClick={() => createUrl()}>Search</MDBBtn>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Example;