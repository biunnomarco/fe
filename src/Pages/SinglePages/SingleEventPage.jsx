import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getEventById, removeCandidature } from '../../Store/eventSlice'
import { Container, Button } from 'react-bootstrap'
import CandidateModal from '../../Components/Modals/CandidateModal'
import { useSession } from '../../Middlewares/ProtectedRoutes'

const SingleEventPage = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const session = useSession()
    const event = useSelector(state => state.events.eventById)
    const [isCandidate, setIsCandidate] = useState(false)
    const [candidatureId, setCandidatureId] = useState('')
   
const sendRemove = () => {
        const allData = {
            candidature: candidatureId,
            event: event._id
        }

        dispatch(removeCandidature(allData))
    }

    useEffect(() => {
        dispatch(getEventById(id));
    }, [id, sendRemove]);
    
    useEffect(() => {
        if (event && event.candidates) {
            const candidate = event.candidates.find(candidate => candidate.artist === session.id);
            if (candidate) {
                setIsCandidate(true);
                setCandidatureId(candidate._id);
            } else {
                setIsCandidate(false);
                setCandidatureId(null);
            }
        } else {
            setIsCandidate(false);
            setCandidatureId(null);
        }
    }, [event, session.id]);

    

    return (
        <Container>
            <div>
                {event.location && (
                    <>
                        <img style={{ maxWidth: '500px' }} src={event.location.proPic} alt="" />
                        <div>
                            <p>Nome Locale: {event.location.name}</p>
                            <p>Nome Evento: {event.name}</p>
                            <p>Data: {event.date}</p>
                            <p>Durata: {event.duration}</p>
                            <p>Benefits: {event.benefits}</p>
                            <p>Rimborsi: {event.refund}</p>
                            <p>{ }</p>
                        </div>

                        {!isCandidate ?  <CandidateModal eventId={event._id}/> : <Button onClick={()=>sendRemove()} variant='danger'>Annulla la candidatura</Button>
                        
                        }
                    </>
                )}
            </div>
        </Container>
    )
}



export default SingleEventPage