import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap';
import { MDBIcon } from 'mdb-react-ui-kit';

const SingleEventCard = (event) => {
    event = event.event
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{event.name}</Card.Title>
                <Card.Text>{event.description}</Card.Text>
                <hr></hr>
                <Card.Footer>
                    <Row>
                        <Col><em>For: <b>{event.requiredArtist}</b></em></Col>
                        <Col><em><MDBIcon far icon="clock" /> {event.duration}</em></Col>
                    </Row>
                </Card.Footer>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default SingleEventCard