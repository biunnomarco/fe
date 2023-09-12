import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import ArtistSearchOffCanvas from '../SearchOffCanvas/ArtistSearchOffCanvas'
import LocalSearchOffCanvas from '../SearchOffCanvas/LocalSearchOffCanvas'
import { useSession } from '../../Middlewares/ProtectedRoutes';

const MyNav = () => {

  const session = useSession()
  function logOut() {
    localStorage.removeItem('userLoggedIn')
    window.location.reload();
  }
  
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to={'/redirect'} href="#home">GIG ME</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Form className="d-flex">
            {!localStorage.getItem('userLoggedIn') ?
              <Link to={`/login`}><Button variant="outline-success" >Log-In</Button></Link> :
              <>
                {/* <NavDropdown
                  title={<img style={{ width: '45px', height: '45px', borderRadius: '50px', border: 'solid 3px green' }} src={session.avatar || session.photos[0].value } />}
                  id="navbarScrollingDropdown"
                  className='mx-2'>
                    <NavDropdown.Item as={Link} to={`/dashboard/${session.id}`}>Your Dashboard</NavDropdown.Item>
                </NavDropdown> */}
                <Button onClick={() => logOut()} variant="outline-success" >Log-out</Button>
                {session.role === 'Artist' ? <ArtistSearchOffCanvas /> : <LocalSearchOffCanvas/>}
              </>
            }

            {/* {actualTheme && (
              <TbBulbOff className='light' style={{ fontSize: '2.5rem' }} onClick={() => selectTheme()} />
            )}
            {!actualTheme && (
              <TbBulb className='dark' style={{ fontSize: '2.5rem' }} onClick={() => selectTheme()} />
            )} */}

          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNav