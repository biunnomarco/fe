import React from 'react'
import '../CandidatureBanner/CandidatureBanner.css'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CandidatureBanner = ({candidature}) => {
  return (
    <div className='box px-2'>
        <div className='ms-1'>
            <b>{candidature.event.date}</b>
        </div>
        <div>
            <b>{candidature.event.name}</b>
        </div>
        <Button as={Link} to={`/eventPage/${candidature.event._id}`}>Vai</Button>
    </div>
  )
}

export default CandidatureBanner