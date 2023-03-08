import { datas } from '../../data/data.js'

import dev from '../../assets/dev.jpg'
import jjb from '../../assets/jjb.jpg'
import football from '../../assets/football.jpg'
import travel from '../../assets/travel.jpg'

import styles from './styles.css'
import { useRef, useState } from 'react'


export default function Presentation() {

    const presentationData = datas;
    const presentationTitle = presentationData.map((data) => data.title)
    const presentationIntroduction = presentationData.map((data) => data.introduction)

  return (
    <div className='presentation'>
      
        <div className='presentation_title'>
          <h1 className='title'>{presentationTitle}</h1>
        </div>

        <div className= 'presentation_introduction'>
          <p className='presentation_introduction_paragraphe'>{presentationIntroduction}</p>
          <div className='assets'>
            <img className='dev_assets' src={dev}></img>
            <img className='dev_assets' src={jjb}></img>
            <img className='dev_assets' src={football}></img>
            <img className='dev_assets' src={travel}></img>
          </div>
        </div>
        <div className='presentation_stack'>Stack</div>
        <div className='presentation_hobbies'>Hobbies</div>
        <div className='presentation_projects'>Projects</div>
        <div className='presentation_else'>Else</div>
    </div>
  )
}
