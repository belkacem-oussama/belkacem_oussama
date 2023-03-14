import { datas } from '../../data/data.js'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

import frontLogo from '../../assets/front.jpg'
import backLogo from '../../assets/back.jpg'
import toolsLogo from '../../assets/tools.jpg'

import phpLogo from '../../assets/php.png'
import symfonyLogo from'../../assets/symfony.png'
import laravelLogo from'../../assets/laravel.png'
import jsLogo from '../../assets/js.png'
import reactLogo from '../../assets/reactJs.png'
import reduxLogo from '../../assets/redux.png'
import gitLogo from '../../assets/git.png'
import gitHubLogo from '../../assets/github.png'
import bootstrapLogo from '../../assets/bootstrap.png'

import { useState } from 'react';

export default function Stack() {

  const [isBackCardVisible, setIsBackCardVisible] = useState(true)
  const [isFrontCardVisible, setIsFrontCardVisible] = useState(true)
  const [isToolsCardVisible, setIsToolsCardVisible] = useState(true)


  const handleShowBackStack = () => {
    setIsBackCardVisible(!isBackCardVisible)
  }

  const handleShowFrontStack = () => {
    setIsFrontCardVisible(!isFrontCardVisible)
  }

  const handleShowToolsStack = () => {
    setIsToolsCardVisible(!isToolsCardVisible)
  }

  return (
        <div className= 'presentation_stack'>
          <ul
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly'
          }}
          >
            {/* display back card */}
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
                    justifyContent: 'space-between',
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
                  height:'110px'
                }}
                >
                <Card.Img variant="top" src={jsLogo}/>
                <Card.Img variant="top" src={reactLogo}/>
                <Card.Img variant="top" src={reduxLogo}/>
                </div>
                <Card.Body
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'column'
                  }}
                >
                  <Card.Title style={{
                    display:'flex',
                    justifyContent:'center',
                    width: '100%',
                    height:'50px', 
                    }}
                    >
                      Languages/Library
                    </Card.Title>
                    <Card.Text>
                      JS for the interaction, React/Redux to make it faster !
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
                  <li className='card'>
                    {/* start back-end card */}
                    {isBackCardVisible ?
                    <Card
                    style={{
                      width: "18rem",
                      height: "30rem",
                      transition: "transform 0.5s ease",
                      transformStyle: "preserve-3d",
                      }}
                    >
                      <Card.Img variant="top" src={backLogo} />
                      <Card.Body
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
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
                    // end back-end card
                    :
                    // start languages card
                    <Card 
                        style={{
                          width: "18rem",
                          height: "30rem",
                          transition: "transform 0.5s ease",
                          transformStyle: "preserve-3d",
                      }}
                    >
                      <div style=
                      {{
                        display: 'flex',
                        justifyContent: 'space-evenly'
                      }}
                      >
                      <Card.Img variant="top" src={phpLogo} />
                      <Card.Img variant="top" src={laravelLogo} />
                      <Card.Img variant="top" style={{margin: '10px'}} src={symfonyLogo} />
                      </div>
                      <Card.Body
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          flexDirection: 'column'
                        }}
                      >
                        <Card.Title style={{
                          display:'flex',
                          justifyContent:'center',
                          width: '100%',
                          height:'50px', 
                        }}
                        >
                      Languages/Framework</Card.Title>
                          <Card.Text>
                            PHP for the server, Laravel & Symfony to make it easier !
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
                    // end languages card
                    }
                  </li>
                  <li className='card'>
                    {/* start tools card */}
                    {isToolsCardVisible ?
                    <Card
                    style={{
                      width: "18rem",
                      height: "30rem",
                      transition: "transform 0.5s ease",
                      transformStyle: "preserve-3d",
                      }}
                    >
                      <Card.Img variant="top" src={toolsLogo} />
                      <Card.Body
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          flexDirection: 'column'
                        }}
                      >
                      <Card.Title style={{height:'30px'}}>Tools</Card.Title>
                          
                      <Card.Text>
                        To help me...
                      </Card.Text>
                      <Button 
                        style={{
                          backgroundColor:'#1f6f78', 
                          border: 'none'
                        }}
                        onClick={handleShowToolsStack}
                      >
                        Show stack
                      </Button>
                      </Card.Body>
                    </Card>
                    // end tools card
                    :
                    // start tools back card
                    <Card 
                        style={{
                          width: "18rem",
                          height: "30rem",
                          transition: "transform 0.5s ease",
                          transformStyle: "preserve-3d",
                      }}
                    >
                      <div style=
                      {{
                        display: 'flex',
                        justifyContent: 'space-evenly'
                      }}
                      >
                      <Card.Img variant="top" src={gitHubLogo} />
                      <Card.Img variant="top" style={{margin: '10px'}} src={gitLogo} />
                      <Card.Img variant="top" style={{margin: '10px'}} src={bootstrapLogo} />
                      </div>
                      <Card.Body
                        style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: 'column'
                        }}
                      >
                        <Card.Title style={{height:'30px'}}>Tools</Card.Title>
                          <Card.Text>
                            GitHub to save the code, Git to version it & Bootstrap to save time !
                          </Card.Text>
                      <Button 
                        style={{
                          backgroundColor:'#1f6f78', 
                          border: 'none',
                        }}
                        onClick={handleShowToolsStack}
                      >
                        Back
                      </Button>
                      </Card.Body>
                    </Card>
                    // end tools back card
                    }
                  </li>
          </ul>
        </div>
  )
}
