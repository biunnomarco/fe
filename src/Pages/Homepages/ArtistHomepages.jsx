import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllEvents } from '../../Store/eventSlice'
import { Container, Row, Col } from 'react-bootstrap'
import SingleEventCard from '../SinglePages/SingleEventCard'
import { nanoid } from 'nanoid'


const ArtistHomepages = () => {

  const dispatch = useDispatch()
  const events = useSelector(state => state.events.events)

  useEffect(() => {
    dispatch(getAllEvents())

  }, [])

  return (
    <>
      <Container>
        <div>ArtistHomepages</div>
        <Row>
          {events && (<>
            {events.map((event) => {
              return (
              <Col key={nanoid()}>
                <SingleEventCard event={event} />
              </Col>
          )
            })}
          </>)}
        </Row>

      </Container>

    </>
  )
}

export default ArtistHomepages