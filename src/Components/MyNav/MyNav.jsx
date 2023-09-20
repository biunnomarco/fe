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
import logo from '../../assets/logo1.png'
import './MyNav.css'

const MyNav = () => {

  const session = useSession()
  function logOut() {
    localStorage.removeItem('userLoggedIn')
    window.location.reload();
  }
  
  return (
    <Navbar style={{backgroundColor:'white'}} sticky='top'>
      <Container > 
        {session && (session.role === 'Artist' ? <ArtistSearchOffCanvas /> : <LocalSearchOffCanvas/>)}

        <Navbar.Brand  as={Link} to={'/redirect'} href="#home"><img className='ps-4' style={{width: '80px'}} src={logo} alt="" /> <h2 className='pt-2 text-primary'> <b>ig me</b> </h2> </Navbar.Brand>
        
        <Form className="d-flex">
            {!localStorage.getItem('userLoggedIn') ?
              <Link to={`/login`}><Button size='sm' variant='primary' role="button">Log In</Button></Link> :
              <>
                {/* <NavDropdown
                  title={<img style={{ width: '45px', height: '45px', borderRadius: '50px', border: 'solid 3px green' }} src={session.avatar || session.photos[0].value } />}
                  id="navbarScrollingDropdown"
                  className='mx-2'>
                    <NavDropdown.Item as={Link} to={`/dashboard/${session.id}`}>Your Dashboard</NavDropdown.Item>
                </NavDropdown> */}
                
                <Button size='sm' onClick={() => logOut()} variant='primary' role="button">Log Out</Button>
                
              </>
            }
           
          </Form>
        
      </Container>
    </Navbar>
  )
}

export default MyNav



