import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllArtist } from '../../Store/artistSlice'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'
import SingleArtistCard from '../SinglePages/SingleArtistCard'
import NewEventModal from '../../Components/Modals/NewEventModal'


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
    <>
    <span>Crea un nuovo evento</span>
    <Button onClick={()=>toggleEvent()}>Create Event</Button>
    {event && (<NewEventModal toggleEvent={toggleEvent}/>)}
     {artists.length !== 0 &&(
        <Container>
          <Row>
            <h2>All Artists</h2>
          {artists.map((artist)=> {
            return (
              <Col>
                
                <SingleArtistCard artist={artist}/>
              </Col>
            )
          })}
          </Row>
        </Container>
     )}
    </>
  )
}

export default LocalHomepage