import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Login from './Pages/Login'
import ValidationPage from './Pages/ValidationPage'
import MyNav from './Components/MyNav/MyNav'
import RegistrationPage from './Pages/Registration/RegistrationPage'
import ArtistRegistrationPage from './Pages/Registration/ArtistRegistrationPage'
import LocalRegistrationPage from './Pages/Registration/LocalRegistrationPage'
import AR1 from './Pages/Registration/AR1'
import MyFooter from './Components/MyFooter/MyFooter'
import ProtectedRoutes from './Middlewares/ProtectedRoutes';
import ArtistHomepage from './Pages/Homepages/ArtistHomepages'
import LocalHomepage from './Pages/Homepages/LocalHomepage'
import Redirect from './Pages/Redirect'
import SingleArtistPage from './Pages/SinglePages/SingleArtistPage'


const App = () => {
  return (
    <BrowserRouter>
    <MyNav/>
      <Routes>
        <Route exact path='/registration' element={<RegistrationPage/>}/>
        <Route path='/artistRegistration' element={<ArtistRegistrationPage/>}/>
        <Route path='/artistRegistration1' element={<AR1/>}/>
        <Route path='/localRegistration' element={<LocalRegistrationPage/>}/>
        <Route path='/redirect' element={<Redirect/>} />
        
        <Route path='/login' element={<Login/>}/>
        <Route path='/validator/:id' element={<ValidationPage/>}/>
        

        <Route element={<ProtectedRoutes/>}>
          <Route path='/' element={<Homepage />} />
          <Route path='/singleArtistPage/:id' element={<SingleArtistPage/>} /> 
          <Route path='/artistHomepage' element={<ArtistHomepage/>} />
          <Route path='/localHomepage' element={<LocalHomepage/>} />
        </Route>


      </Routes>
    <MyFooter />
    </BrowserRouter>
  )
}

export default App
