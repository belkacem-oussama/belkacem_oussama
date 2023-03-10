import Header from '../Header/Header'
import Presentation from '../Presentation/Presentation'

import 'bootstrap/dist/css/bootstrap.min.css';

import styles from './styles.css'
import Introduction from '../Introduction/Introduction';
import Stack from '../Stack/Stack';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';

export default function Home() {
  
  return (
    <div className='app'>
      <Header />
      <Presentation />
      <Introduction />
      <Stack />
      <Projects />
      <Footer />
    </div>
  )
}
