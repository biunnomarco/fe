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
import logo from '../../assets/Gigme.png'
import './MyNav.css'

const MyNav = () => {

  const session = useSession()
  console.log(session)
  function logOut() {
    localStorage.removeItem('userLoggedIn')
    window.location.reload();
  }
  
  return (
    <Navbar style={{backgroundColor:'#FFECD1'}} sticky='top'>
      <Container > 
        {session && (session.role === 'Artist' ? <ArtistSearchOffCanvas /> : <LocalSearchOffCanvas/>)}

        <Navbar.Brand  as={Link} to={'/redirect'} href="#home"><img className='ps-4' style={{width: '200px'}} src={logo} alt="" /></Navbar.Brand>
        
        <Form className="d-flex">
            {!localStorage.getItem('userLoggedIn') ?
              <Link to={`/login`}><button class="button-50" role="button">Log In</button></Link> :
              <>
                {/* <NavDropdown
                  title={<img style={{ width: '45px', height: '45px', borderRadius: '50px', border: 'solid 3px green' }} src={session.avatar || session.photos[0].value } />}
                  id="navbarScrollingDropdown"
                  className='mx-2'>
                    <NavDropdown.Item as={Link} to={`/dashboard/${session.id}`}>Your Dashboard</NavDropdown.Item>
                </NavDropdown> */}
                
                <button  onClick={() => logOut()} class="button-50" role="button">Log Out</button>
                
              </>
            }
           
          </Form>
        
      </Container>
    </Navbar>
  )
}

export default MyNav



