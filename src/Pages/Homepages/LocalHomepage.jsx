import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllArtist } from '../../Store/artistSlice'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'
import SingleArtistCard from '../SinglePages/SingleArtistCard'
import NewEventModal from '../../Components/Modals/NewEventModal'
import '../../fonts.css'
import { nanoid } from 'nanoid'
import { useSession } from '../../Middlewares/ProtectedRoutes'
import { changeLocalProPic, getLocalById } from '../../Store/localSlice'
import SingleEventLocalCard from '../SinglePages/SingleEventLocalCard'
import { MDBFile, MDBIcon, MDBBtn } from 'mdb-react-ui-kit'
import '../../ColorsCss.css'


const LocalHomepage = () => {

  const session = useSession()
  const dispatch = useDispatch()
  const artists = useSelector(state => state.artists.artists)
  const dashboard = useSelector(state => state.locals.loggedLocal)
  const artistsStatus = useSelector(state => state.artists.status)
  const [proPic, setProPic] = useState(null)
  const [event, setEvent] = useState(false)


  const [changeModal, setChangeModal] = useState(false)


  useEffect(() => {
    dispatch(getAllArtist())
    dispatch(getLocalById(session.id))
  
  }, [])

  const toggleEvent = () => {
    setEvent(!event)
  }

  const saveProPic = () => {
    const patchData = {
      proPic: proPic,
      id: session.id
    }
    if (proPic) {
      dispatch(changeLocalProPic(patchData)).then(() => dispatch(getLocalById(session.id))).then(() => setChangeModal(false))
    }
  }

  return (


    <div className='row orangeBg'>

      <div className='col-lg-8 col-xl-9 py-3'>
        {artists.length !== 0 && (
          <Row className='px-5'>
            <p className='text-center' style={{ fontSize: '36px'}}>Artists</p>
            {artists && (artists.map((artist) => {
              return (
                <Col key={nanoid()} className='d-flex justify-content-center my-2'>

                  <SingleArtistCard artist={artist} />
                </Col>
              )
            }))}
          </Row>
        )}
      </div>

      
      <div className='col-lg-4 col-xl-3 py-3 blueBg'>
        {dashboard && (
          <>
            <p className='text-center' style={{ fontSize: '36px' }}>Dashboard</p>

            <div className='d-flex flex-column align-items-center'>

              {!changeModal ?
                <div style={{ position: 'relative' }} className='text-center mb-3'>
                  <img
                    style={{ width: '80%', borderRadius: '25px' }}
                    src={dashboard.proPic} alt="profile Picture"
                  />
                  <MDBIcon
                    style={{ cursor: 'pointer', position: 'absolute', bottom: '20px', right: '15%' }}
                    onClick={() => setChangeModal(!changeModal)} size='xl' fas icon="edit" />
                </div>
                :
                <div className='text-center mb-4'>
                  <MDBFile onChange={(e) => setProPic(e.target.files[0])} id='customFile' />
                  <MDBBtn className='pinkBtn' size='sm' onClick={() => setChangeModal(!changeModal)}>Close</MDBBtn>
                  <MDBBtn className='pinkBtn' size='sm' onClick={() => saveProPic()}>Save</MDBBtn>
                </div>}




              <div className='h4'>{dashboard.name}</div>
              <div>
                `{dashboard.region}, {dashboard.city}, {dashboard.address}`
              </div>
              <div>{dashboard.email}</div>
            </div>
          </>
        )}

        <div className='mt-5 d-flex flex-column align-items-center'>
          <h3>I tuoi eventi</h3>
          <Button
            className='my-2 mb-4 salmonBtn'
            onClick={() => toggleEvent()}>Create Event
          </Button>

          {dashboard && dashboard.events && (dashboard.events.map((event) => {
            return (
              <SingleEventLocalCard event={event} />
            )
          }))}
        </div>
        {event && (<NewEventModal toggleEvent={toggleEvent} />)}

      </div>



    </div>

  )
}

export default LocalHomepage