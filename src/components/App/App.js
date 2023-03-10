import React, { useRef, useState } from 'react'
import Header from '../Header/Header'
import Presentation from '../Presentation/Presentation'

import 'bootstrap/dist/css/bootstrap.min.css';

import styles from './styles.css'
import Introduction from '../Introduction/Introduction';
import Stack from '../Stack/Stack';
import Projects from '../Projects/Projects';

export default function App() {
  
  return (
    <div className='app'>
      <Header />
      <Presentation />
      <Introduction />
      <Stack />
      <Projects />
    </div>
  )
}
