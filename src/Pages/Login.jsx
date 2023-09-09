import React, { useState } from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logIn } from '../Store/loginSlice';

const Login = () => {

  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const sendLogin = () => {
    const loginPayload = {
      email: email,
      password: password,
    }

    dispatch(logIn(loginPayload))
    console.log(loginPayload)
  }

  return (
    <div className='d-flex align-items-center'>
    <MDBContainer className="my-5">

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol className='d-flex align-items-center' md='6'>
            <MDBCardImage src='https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80' alt="login form" className='rounded-start w-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                <span className="h1 fw-bold mb-0">GIG ME</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

                <MDBInput 
                  wrapperClass='mb-4' label='Email address' type='email' size="lg"
                  onChange={(e)=>{setEmail(e.target.value);}}
                />
                <MDBInput 
                  wrapperClass='mb-4' label='Password' type='password' size="lg"
                  onChange={(e)=>setPassword(e.target.value)}
                />

              <MDBBtn 
                className="mb-4 px-5" color='dark' size='lg'
                onClick={()=> sendLogin()}
              >
                Login </MDBBtn>
              <a className="small text-muted" href="#!">Forgot password?</a>
              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <Link to={'/registration'} href="#!" style={{color: '#393f81'}}>Register here</Link></p>

              <div className='d-flex flex-row justify-content-start'>
                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                <a href="#!" className="small text-muted">Privacy policy</a>
              </div>

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
    </div>
  )
}

export default Login