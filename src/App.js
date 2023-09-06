import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Login from './Pages/Login'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>

        <Route exact path='/' element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
