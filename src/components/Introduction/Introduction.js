import { datas } from '../../data/data.js'
import Card from 'react-bootstrap/Card'

import dev from '../../assets/dev.jpg'
import jjb from '../../assets/jjb.png'
import football from '../../assets/football.png'
import travel from '../../assets/travel.png'

import styles from './styles.css'

export default function Introduction() {

    const presentationData = datas;
    const presentationIntroduction = presentationData.map((data) => data.introduction)

  return (
        <div className= 'presentation_introduction'>
          <p className='presentation_introduction_paragraphe'>{presentationIntroduction}</p>
          <div className='assets'>
            <img className='dev_assets' src={dev}></img>
            <img className='dev_assets' src={jjb}></img>
            <img className='dev_assets' src={football}></img>
            <img className='dev_assets' src={travel}></img>
          </div>
        </div>
  )
}
