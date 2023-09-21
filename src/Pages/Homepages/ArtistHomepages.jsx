import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allArtistCandidatures, getAllEvents } from '../../Store/eventSlice'
import { Container, Row, Col, Carousel, Card, Alert } from 'react-bootstrap'
import SingleEventCard from '../SinglePages/SingleEventCard'
import SingleLocalCard from '../SinglePages/SingleLocalCard'
import { nanoid } from 'nanoid'
import EventCarousel from '../../Components/Carousels/EventCarousel'
import { getAllLocal } from '../../Store/localSlice'
import { getArtistById } from '../../Store/artistSlice'
import { useSession } from '../../Middlewares/ProtectedRoutes'
import CandidatureBanner from '../../Components/CandidatureBanner/CandidatureBanner'
import { Link } from 'react-router-dom'
import '../../ColorsCss.css'



const ArtistHomepages = () => {

  const dispatch = useDispatch()
  const session = useSession()
  const events = useSelector(state => state.events.events)
  const locals = useSelector(state => state.locals.locals)
  const dashboard = useSelector(state => state.artists.artistById)
  const candidatures = useSelector(state => state.events.candidatures)

  useEffect(() => {

    dispatch(getAllEvents())
    dispatch(getAllLocal())
    dispatch(getArtistById(session.id))
    dispatch(allArtistCandidatures(session.id))
  }, [])

  return (
    <>
      <Container className='row ' fluid>

        <Col xl={3} className='py-5 blueBg'>
        <Link to={`/artistDashboard/${session.id}`}><h3 style={{color: 'purple' }} className='text-center'>{dashboard.name}</h3></Link>
          <div className='d-flex flex-column align-items-center my-3'>
            <img style={{ width: '300px', height: '300px', borderRadius: '50%', objectFit: 'cover' }} src={dashboard.proPic} alt="" />
            <br />
            {/* <Link to={`/artistDashboard/${session.id}`}> <span style={{ fontSize: '1.3rem', color: 'purple' }}>{dashboard.name}</span></Link> */}
            <div style={{ fontSize: '0.8rem' }} className='d-flex flex-column align-items-center'>
              <em>{dashboard.region}</em>
              <em>{dashboard.city}</em>
              <em>{dashboard.address}</em>
            </div>
            <br />
            <div>
              <h4 className='text-center'>Le tue candidature</h4>
              {candidatures && (
                candidatures.map((candidature) => {
                  console.log(candidature)
                  return (
                    <CandidatureBanner candidature={candidature} />
                  )
                }))}
              {candidatures && candidatures.length === 0 && (<Alert variant='danger'>Ancora nessuna candidatura</Alert>)}
            </div>
          </div>
        </Col>



        <Col  className='py-5 lightBlueBg' xl={9} lg={12}>
          <Row >
            <Col className='d-flex flex-column align-items-center'>
              <h3 className='text-darkblue'><b>Eventi</b></h3>
              <EventCarousel events={events} />
            </Col>
          </Row>
          <Row className='d-flex justify-content-center text-darkblue'>
            {locals && (<>
              <h3 className='my-4 text-center'><b>Locali</b></h3>
              {locals.map((local) => {
                return (
                  <Col className='d-flex justify-content-center' key={nanoid()}>
                    <SingleLocalCard local={local} />
                  </Col>
                )
              })}
            </>)}
          </Row>
        </Col>



      </Container>

    </>
  )
}

export default ArtistHomepages