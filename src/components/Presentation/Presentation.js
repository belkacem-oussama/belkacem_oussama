import { datas } from '../../data/data.js'
import Card from 'react-bootstrap/Card'

import dev from '../../assets/dev.jpg'
import jjb from '../../assets/jjb.jpg'
import football from '../../assets/football.jpg'
import travel from '../../assets/travel.jpg'
import reactJs from '../../assets/reactJs.png'
import jsLogo from '../../assets/js.png'
import phpLogo from '../../assets/php.png'
import symfonyLogo from '../../assets/symfony.png'

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

        <div className= 'presentation_introduction'>
          <p className='presentation_introduction_paragraphe'>{presentationIntroduction}</p>
          <div className='assets'>
            <img className='dev_assets' src={dev}></img>
            <img className='dev_assets' src={jjb}></img>
            <img className='dev_assets' src={football}></img>
            <img className='dev_assets' src={travel}></img>
          </div>
        </div>

        <div className='presentation_stack'>
          <h2>J'aime me former sur de nouvelles technos !</h2>
          <ul>
            <li>
              <Card style={{ 
                width: '20rem', 
                backgroundColor: '#118a7e',
                position: 'relative',
                border: 'none'
              }}>
                <Card.Img 
                  src={reactJs}
                  style={{ 
                    width: '13rem', 
                    backgroundColor: '#118a7e',
                    transformStyle: 'preserve-3d',
                    transition: 'transform 1.5s',
                    backfaceVisibility: 'hidden',
                    cursor: 'pointer'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'rotateY(180deg)';
                  }}

                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'rotateY(0deg)';
                  }}
                />
              </Card>
            </li>
            <li>
              <Card style={{ 
                width: '20rem', 
                backgroundColor: '#118a7e',
                position: 'relative',
                border: 'none'
              }}>
                <Card.Img 
                  src={jsLogo}
                  style={{ 
                    width: '13rem', 
                    backgroundColor: '#118a7e',
                    transformStyle: 'preserve-3d',
                    transition: 'transform 1.5s',
                    backfaceVisibility: 'hidden',
                    cursor: 'pointer'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'rotateY(180deg)';
                  }}

                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'rotateY(0deg)';
                  }}
                />
              </Card>
            </li>
            <li>
              <Card style={{ 
                width: '20rem', 
                backgroundColor: '#118a7e',
                position: 'relative',
                border: 'none'
              }}>
                <Card.Img 
                  src={phpLogo}
                  style={{ 
                    width: '13rem', 
                    backgroundColor: '#118a7e',
                    transformStyle: 'preserve-3d',
                    transition: 'transform 1.5s',
                    backfaceVisibility: 'hidden',
                    cursor: 'pointer'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'rotateY(180deg)';
                  }}

                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'rotateY(0deg)';
                  }}
                />
              </Card>
            </li>
            <li>
              <Card style={{ 
                width: '20rem', 
                backgroundColor: '#118a7e',
                position: 'relative',
                border: 'none'
              }}>
                <Card.Img 
                  src={symfonyLogo}
                  style={{ 
                    width: '13rem', 
                    backgroundColor: '#118a7e',
                    transformStyle: 'preserve-3d',
                    transition: 'transform 1.5s',
                    backfaceVisibility: 'hidden',
                    cursor: 'pointer'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'rotateY(180deg)';
                  }}

                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'rotateY(0deg)';
                  }}
                />
              </Card>
            </li>
          </ul>
        </div>

        <div className='presentation_hobbies'>Hobbies</div>
        <div className='presentation_projects'>Projects</div>
        <div className='presentation_else'>Else</div>
    </div>
  )
}
