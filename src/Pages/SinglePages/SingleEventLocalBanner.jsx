import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap';
import { MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import '../../ColorsCss.css'
import '../../Components/CandidatureBanner/CandidatureBanner.css'


const SingleEventLocalCard = (event) => {
    
    event = event.event
  
    return (
        <div className='box px-2'>
            <div className='ms-1'>
                <b>{event.date}</b>
            </div>
            <div>
                <b>{event.name}</b>
            </div>
            <Button as={Link} to={`/eventPage/`}>{event.candidates.length}</Button>
        </div>
      )
  
}

export default SingleEventLocalCard