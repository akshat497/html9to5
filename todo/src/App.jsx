import React, { useEffect, useState } from 'react'
import Login from './pages/Login'
import Header from './components/Header'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'

export default function App() {
   const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  return (
  <>
  <BrowserRouter>
  <Header user={user}/>
  <Routes>
  <Route path='/' element={<Login user={user} setUser={setUser}/>}/> 
  <Route path='/home' element={<HomePage user={user}/>}/> 

  </Routes>
    
  </BrowserRouter>
  </>
  )
}
