import { datas } from '../../data/data.js'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

import frontLogo from '../../assets/front.jpg'
import backLogo from '../../assets/back.jpg'
import phpLogo from '../../assets/php.png'
import symfonyLogo from'../../assets/symfony.png'
import jsLogo from '../../assets/js.png'
import reactLogo from '../../assets/reactJs.png'

import styles from './styles.css'
import { useState } from 'react';

export default function Stack() {

  const [isBackCardVisible, setIsBackCardVisible] = useState(true)
  const [isFrontCardVisible, setIsFrontCardVisible] = useState(true)

  const handleShowBackStack = () => {
    setIsBackCardVisible(!isBackCardVisible)
  }

  const handleShowFrontStack = () => {
    setIsFrontCardVisible(!isFrontCardVisible)
  }

  return (
        <div className= 'presentation_stack'>
          <ul>

            {/* display back card */}

            <li>
              {isBackCardVisible ?
              <Card 
                style={{ 
                  width: '18rem',
                  height: '30rem'
                }}
              >
                <Card.Img variant="top" src={backLogo} />
                <Card.Body
                  style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column'
                  }}
                >
                <Card.Title style={{height:'30px'}}>Back-end</Card.Title>
                    
                <Card.Text>
                  To talk with the server...
                </Card.Text>
                <Button 
                  style={{
                    backgroundColor:'#1f6f78', 
                    border: 'none'
                  }}
                  onClick={handleShowBackStack}
                >
                  Show stack
                </Button>
                </Card.Body>
              </Card>
              :
              <Card 
                style={{ 
                  width: '18rem',
                  height: '30rem'
                }}
              >
                <div style=
                {{
                  display: 'flex',
                  justifyContent: 'space-evenly'
                }}
                >
                <Card.Img variant="top" src={phpLogo} />
                <Card.Img variant="top" 
                style={{
                  margin: '10px'
                }} 
                src={symfonyLogo} />
                </div>
                <Card.Body
                  style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column'
                  }}
                >
                  <Card.Title style={{height:'30px'}}>Languages/Framework</Card.Title>
                    
                    <Card.Text>
                      PHP for the server, Symfony to make it easier !
                    </Card.Text>
                <Button 
                  style={{
                    backgroundColor:'#1f6f78', 
                    border: 'none',
                  }}
                  onClick={handleShowBackStack}
                >
                  Back
                </Button>
                </Card.Body>
              </Card>
              }
            </li>

          {/* display front card */}

            <li>
              {isFrontCardVisible ?
              <Card 
                style={{ 
                  width: '18rem',
                  height: '30rem'
                }}
              >
                <Card.Img variant="top" src={frontLogo} />
                <Card.Body
                  style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column'
                  }}
                >
                <Card.Title style={{height:'30px'}}>Front-end</Card.Title>
                    
                <Card.Text>
                  For interaction...
                </Card.Text>
                <Button 
                  style={{
                    backgroundColor:'#1f6f78', 
                    border: 'none'
                  }}
                  onClick={handleShowFrontStack}
                >
                  Show stack
                </Button>
                </Card.Body>
              </Card>
              :
              <Card 
                style={{ 
                  width: '18rem',
                  height: '30rem'
                }}
              >
                <div style=
                {{
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  padding: '20px'
                }}
                >

                <Card.Img variant="top" src={jsLogo} />
                <Card.Img variant="top" src={reactLogo} />

                </div>
                <Card.Body
                  style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column'
                  }}
                >
                  <Card.Title style={{height:'30px'}}>Languages/Library</Card.Title>
                    
                    <Card.Text>
                      JS for the interaction, React to make it faster !
                    </Card.Text>
                <Button 
                  style={{
                    backgroundColor:'#1f6f78', 
                    border: 'none',
                  }}
                  onClick={handleShowFrontStack}
                >
                  Back
                </Button>
                </Card.Body>
              </Card>
              }
            </li>
          </ul>
        </div>
  )
}
