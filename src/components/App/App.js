import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
// import Contact from '../Contact/Contact'
import Error from '../Error/Error'
import Header from '../Header/Header'
import Home from '../Home/Home'
import PresentationPage from '../PresentationPage/PresentationPage'
import Projects from '../Projects/Projects'
import Stack from '../Stack/Stack'

import styles from './styles.scss'

export default function App() {
  const[loading, setLoading] = useState(true)
  const root = document.getElementById('spinner')

  if(root){
    setTimeout(()=> {
      root.style.display = "none";
      setLoading(false)
    },2000)
  }

  return (
    !loading &&(
      <div className='app'>
        <Header />
        <Routes>
            <Route path='*' element={<Error />} />
            <Route path='/' element={<Home />} />
            <Route path='/stack' element={<Stack />} />
            <Route path='/projects' element={<Projects />} />
            {/* <Route path='/contact' element={<Contact />} /> */}
            <Route path='/presentation' element={<PresentationPage />} />
        </Routes>
      </div>
    )
  )
}
