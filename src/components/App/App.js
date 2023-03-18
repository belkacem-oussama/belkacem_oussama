import { Route, Routes } from 'react-router-dom'
import Contact from '../Contact/Contact'
import Error from '../Error/Error'
import Header from '../Header/Header'
import Home from '../Home/Home'
import PresentationPage from '../PresentationPage/PresentationPage'

import styles from './styles.css'

export default function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Error />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/presentation' element={<PresentationPage />} />
      </Routes>
    </div>
  )
}
