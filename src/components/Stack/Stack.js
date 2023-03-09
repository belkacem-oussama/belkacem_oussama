import { datas } from '../../data/data.js'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

import frontLogo from '../../assets/front.jpg'
import backLogo from '../../assets/back.jpg'

import styles from './styles.css'
import { useState } from 'react';

export default function Stack() {

  const [isCardVisible, setIsCardVisible] = useState(false)

  const handleShowStack = () => {
    setIsCardVisible(!isCardVisible)
  }

  return (
        <div className= 'presentation_stack'>
          <ul>
            <li>
              <Card 
                className={isCardVisible ? 'rotate' : ''}
                style={{ 
                  width: '18rem'
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
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                  <Button 
                  style={{
                    backgroundColor:'#1f6f78', 
                    border: 'none'
                  }}
                  onClick={handleShowStack}
                  >
                    Show stack
                    </Button>
                  </Card.Body>
              </Card>
            </li>
          </ul>
        </div>
  )
}
