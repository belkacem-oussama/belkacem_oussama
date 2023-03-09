import { datas } from '../../data/data.js'

import styles from './styles.css'

export default function Presentation() {

    const presentationData = datas;
    const presentationTitle = presentationData.map((data) => data.title)
    const presentationIntroduction = presentationData.map((data) => data.introduction)

  return (
    <div className='presentation'>
      
        <div className='presentation_title'>
          <h1 className='title'>{presentationTitle}</h1>
        </div>
    </div>
  )
}
