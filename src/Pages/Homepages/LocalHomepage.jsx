import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllArtist } from '../../Store/artistSlice'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'
import SingleArtistCard from '../SinglePages/SingleArtistCard'
import NewEventModal from '../../Components/Modals/NewEventModal'
import '../../fonts.css'


const LocalHomepage = () => {

  const dispatch = useDispatch()
  const artists = useSelector(state => state.artists.artists)
  const artistsStatus = useSelector(state => state.artists.status)
  const [event, setEvent] = useState(false)

  useEffect(() => {
    dispatch(getAllArtist())
  }, [])

  const toggleEvent = () => {
    setEvent(!event)
  }

  return (
    <div className='' style={{ backgroundColor: '' }}>

      <Container className='pb-4' style={{ backgroundColor: '#ffaa5e' }}>
      <span>Crea un nuovo evento</span>
      <Button onClick={() => toggleEvent()}>Create Event</Button>
      {event && (<NewEventModal toggleEvent={toggleEvent} />)}
      {artists.length !== 0 && (
          <Row className=''>
            <p className='text-center' style={{ fontSize: '56px', color: '#FF7D00' }}>ARTISTS</p>
            {artists.map((artist) => {
              return (
                <Col className='d-flex justify-content-center my-2'>

                  <SingleArtistCard artist={artist} />
                </Col>
              )
            })}
          </Row>
      )}
      </Container>
    </div>
  )
}

export default LocalHomepage