import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Login from './Pages/Login'
import ValidationPage from './Pages/ValidationPage'
import MyNav from './Components/MyNav/MyNav'
import RegistrationPage from './Pages/Registration/RegistrationPage'
import ArtistRegistrationPage from './Pages/Registration/ArtistRegistrationPage'
import LocalRegistrationPage from './Pages/Registration/LocalRegistrationPage'
import MyFooter from './Components/MyFooter/MyFooter'
import ProtectedRoutes from './Middlewares/ProtectedRoutes';


const App = () => {
  return (
    <BrowserRouter>
    <MyNav/>
      <Routes>
        <Route exact path='/registration' element={<RegistrationPage/>}/>
        <Route path='/artistRegistration' element={<ArtistRegistrationPage/>}/>
        <Route path='/localRegistration' element={<LocalRegistrationPage/>}/>
        
        <Route path='/login' element={<Login/>}/>
        <Route path='/validator/:id' element={<ValidationPage/>}/>
        

        <Route element={<ProtectedRoutes/>}>
          <Route path='/' element={<Homepage />} />
        </Route>


      </Routes>
    <MyFooter />
    </BrowserRouter>
  )
}

export default App
