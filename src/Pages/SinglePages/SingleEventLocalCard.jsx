import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap';
import { MDBIcon } from 'mdb-react-ui-kit';
import '../../ColorsCss.css'


const SingleEventLocalCard = (event) => {
    
    event = event.event
  return (
    <Card className='my-2' style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{event.date}</Card.Title>
                <Card.Title> <b>{event.name}</b> </Card.Title>
                <Card.Text>{event.description}</Card.Text>
                <Card.Footer>
                    <Row>
                        <Col><em>For: <b>{event.requiredArtist}</b></em></Col>
                        <Col><em><MDBIcon far icon="clock" /> {event.duration}</em></Col>
                    </Row>
                </Card.Footer>
                <Button className='pinkBtn'>Vai all'evento</Button>
                <span>{event.candidates.length}</span>
            </Card.Body>
        </Card>
  )
}

export default SingleEventLocalCard