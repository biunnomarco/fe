import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getLocalById } from '../../Store/localSlice'
import { Container, Row, Col } from 'react-bootstrap'
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';
import SingleEventCard from './SingleEventCard'

const SingleLocalPage = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const local = useSelector(state => state.locals.loggedLocal)

  useEffect(() => {
    dispatch(getLocalById(id))
  }, [])

  const [fillActive, setFillActive] = useState('tab1');

    const handleFillClick = (value) => {
        if (value === fillActive) {
            return;
        }

        setFillActive(value);
    };


  return (
    <>
      {local && local.name && (
        <Container fluid className='py-5 m-3 d-flex row'>
        <Row>
            <h1 className='mx-5'>{local.name}</h1>
            <div className='col-12 col-lg-7 d-flex flex-column'>
                <img className='m-auto' style={{ width: '90%', borderRadius: '30px' }} src={local.proPic} alt="" />
            </div>
            <div className='col-12 col-lg-5 py-5' style={{ fontSize: '1.5rem' }}>
                <h1 className='mb-4'>Info</h1>
                <p><b>Email</b>: {local.email}</p>
                <p><b>Indirizzo: </b>{local.region}, {local.city}, {local.address}</p>
                {local.favouriteGenre && (
                    <>
                        <p><b>Generi preferiti: </b>
                            {local.favouriteGenre.map((genre, i) => {
                                const genToUp = genre.charAt(0).toUpperCase() + genre.slice(1);
                                return (
                                    <>
                                        {i + 1 !== local.favouriteGenre.length && (
                                            <span>{genToUp}, </span>
                                        )}
                                        {i + 1 === local.favouriteGenre.length && (
                                            <span>{genToUp}</span>
                                        )}

                                    </>
                                )
                            })}</p>
                    </>
                )}
                {local.backline && (
                    <>
                        <p><b>Backline: </b>

                            {local.backline.map((instrument, i) => {
                                const insToUp = instrument.charAt(0).toUpperCase() + instrument.slice(1);
                                return (
                                    <>
                                        {i + 1 !== local.backline.length && (
                                            <span>{insToUp}, </span>
                                        )}
                                        {i + 1 === local.backline.length && (
                                            <span>{insToUp}</span>
                                        )}

                                    </>
                                )
                            })}</p>
                    </>
                )}
                <p><b>Descrizione</b>: {local.description}</p>
            </div>
        </Row>

        <MDBTabs fill className='mb-3'>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleFillClick('tab1')} active={fillActive === 'tab1'}>
                        <span style={{ fontSize: '1.3rem' }}>Eventi</span>
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleFillClick('tab2')} active={fillActive === 'tab2'}>
                        <span style={{ fontSize: '1.3rem' }}>Recensioni</span>
                    </MDBTabsLink>
                </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>
                <MDBTabsPane show={fillActive === 'tab1'}>
                    <Container className='pt-3'>
                        <Row>
                            {local.events && (local.events.map((event) => {
                                return (
                                    <>
                                        <Col>
                                            <SingleEventCard event={event} />
                                        </Col>
                                    </>
                                )
                            }))}
                        </Row>
                    </Container>
                </MDBTabsPane>
                <MDBTabsPane show={fillActive === 'tab2'}>
                    
                </MDBTabsPane>
            </MDBTabsContent>

      </Container>
      )}
    </>

  )
}

export default SingleLocalPage