import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Coding from '../Coding/Coding'
import Home from '../Home/Home'

export default function App() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coding' element={<Coding />} />
    </Routes>
  )
}
