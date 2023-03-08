import React, { useRef, useState } from 'react'
import Header from '../Header/Header'
import Presentation from '../Presentation/Presentation'

import 'bootstrap/dist/css/bootstrap.min.css';

import styles from './styles.css'

export default function App() {
  
  return (
    <div className='app'>
      <Header />
      <Presentation />
    </div>
  )
}
