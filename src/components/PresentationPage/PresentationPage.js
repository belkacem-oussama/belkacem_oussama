import { presentationText } from '../../data/presentation'
import styles from './styles.css'

import codeLogo from '../../assets/code.jpg'
import linkedInLogo from '../../assets/linkedin.png'
import gmailLogo from '../../assets/gmail.png'
import twitterLogo from '../../assets/twitter.png'
import gitHubLogo from '../../assets/github.png'
import cvLogo from '../../assets/cv.png'

export default function PresentationPage() {

    const presentationData = presentationText

  return (
      <div className='text_div'>
          {presentationData.map(element => (
            <div className='text_introduction'>
              <div className='text_introduction_text'>
              <h1>Me !</h1>
                <p>{element.introduction} &#128516;</p>
                <a href={element.formation_link} target="_blank">Formation suivie chez O'clock !</a>
              </div>
              <div className='text_introduction_socials'>
                <a href='https://www.linkedin.com/in/oussama-belkacem-767717196/' target='_blank'><img src={linkedInLogo}></img></a>
                <a href='mailto:oussama.blkc@gmail.com'><img src={gmailLogo}></img></a>
                <a href='https://twitter.com/ob__tech' target='_blank'><img src={twitterLogo}></img></a>
                <a href='https://github.com/belkacem-oussama' target='_blank'><img src={gitHubLogo}></img></a>
                <a href='https://drive.google.com/file/d/1lj8lsIGpzkNVcTcqE2B9hGs_Y1Bg1OBB/view?usp=sharing' target='_blank'><img src={cvLogo}></img></a>
              </div>
            </div>
            ))}
            <div className='text_pic'><img src={codeLogo}></img></div>
      </div>
  )
}
