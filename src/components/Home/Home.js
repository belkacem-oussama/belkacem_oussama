import Presentation from '../Presentation/Presentation'

import 'bootstrap/dist/css/bootstrap.min.css';

import Introduction from '../Introduction/Introduction';
import Stack from '../Stack/Stack';
import Projects from '../Projects/Projects';


export default function Home() {
  
  return (
    <div className='home'>
      <Presentation />
      <Introduction />
      <Stack />
      <Projects />
    </div>
  )
}
