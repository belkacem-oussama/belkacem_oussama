import { datas } from '../../data/data.js'
import styles from './styles.css'


export default function Presentation() {

    const presentationData = datas;
    const presentationTitle = presentationData.map((data) => data.title)
    const presentationIntroduction = presentationData.map((data) => data.introduction)

  return (
    <div className='presentation'>
        <div className='presentation_title'><h1>{presentationTitle}</h1></div>
        <div className='presentation_introduction'>{presentationIntroduction}</div>
        <div className='presentation_stack'>Stack</div>
        <div className='presentation_hobbies'>Hobbies</div>
        <div className='presentation_projects'>Projects</div>
        <div className='presentation_else'>Else</div>
    </div>
  )
}
