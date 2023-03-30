import { presentationText } from '../../data/presentation'
import { useState, useEffect } from 'react'
import styles from './styles.scss'

import codeLogo from '../../assets/code.jpg'
import linkedInLogo from '../../assets/linkedin.png'
import gmailLogo from '../../assets/gmail.png'
import twitterLogo from '../../assets/twitter.png'
import gitHubLogo from '../../assets/github.png'
import cvLogo from '../../assets/cv.png'

export default function PresentationPage() {

  const presentationData = presentationText

  const [statusIndex, setStatusIndex] = useState(0)

  const statusArray = [
    'Web Developper',
    'Front-End Developper',
    'Back-End Developper',
    'Man',
    'Footballer',
    'Jiu-Jitsu Ka',
    'Français oui oui'
  ]

  useEffect(() => {
    const timerId = setTimeout(() => {
      setStatusIndex((statusIndex + 1) % statusArray.length)
    }, 2000)

    return () => {
      clearTimeout(timerId)
    }
  }, [statusIndex])

  const statusName = statusArray[statusIndex]

  return (
      <div className='text_div'>
        <h2><span className='status_title'>I'm a </span><span className='status_name'>{statusName}</span></h2>
        <div className='text_div_presentation'>
          {presentationData.map(element => (
            <div className='text_div_introduction' key={element.id} >
              <div className='text_div_introduction_text'>
              <br></br>
                <p>{element.introduction} &#128516;</p>
                <br></br>
                <p>(N'hésite pas à découvrir mes réseaux ou mon cv)</p>
                <br></br>
              </div>
              <div className='text_div_introduction_socials'>
                <a href='https://www.linkedin.com/in/oussama-belkacem-767717196/' target='_blank'><img src={linkedInLogo}></img></a>
                <a href='mailto:oussama.blkc@gmail.com'><img src={gmailLogo}></img></a>
                <a href='https://twitter.com/ob__tech' target='_blank'><img src={twitterLogo}></img></a>
                <a href='https://github.com/belkacem-oussama' target='_blank'><img src={gitHubLogo}></img></a>
                <a href='https://drive.google.com/file/d/1lj8lsIGpzkNVcTcqE2B9hGs_Y1Bg1OBB/view?usp=sharing' target='_blank'><img src={cvLogo}></img></a>
              </div>
            </div>
            ))}
            <div className='text_div_pic'><img src={codeLogo}></img></div>
        </div>
      </div>
  )
}
