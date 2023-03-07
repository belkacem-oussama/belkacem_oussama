import { datas } from '../../data/data.js'
import styles from './styles.css'


export default function Presentation() {

    const presentationData = datas;
    const presentationTitle = presentationData.map((data) => data.title)

  return (
    <div className='presentation'>
        <div className='presentation_title'>{presentationTitle}</div>
        <div className='presentation_introduction'>Introduction</div>
        <div className='presentation_stack'>Stack</div>
        <div className='presentation_hobbies'>Hobbies</div>
        <div className='presentation_projects'>Projects</div>
        <div className='presentation_else'>Else</div>
    </div>
  )
}
