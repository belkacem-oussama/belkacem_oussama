import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import linkedIn from '../../assets/linkedin.png'
import gmail from '../../assets/gmail.png'
import { useNavigate } from 'react-router-dom';

export default function Footer() {

    let navigate = useNavigate()

  return (
    <div className='footer'>
        <Card 
            className="text-center" 
            style={{
                backgroundColor: '#1f6f78',
                color: '#3baea0',
                }}
        >
        <Card.Header
        style={{
            fontSize: '20px',
        }}
        >
            We can get to know each other ! &#x1F64C;
            </Card.Header>
        <Card.Body style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
            }}
            >
            <Card.Text
            style={{
                display:'flex',
                justifyContent: 'center',
            }}
            >
                <div
                style={{
                    width: '10%',
                    display: 'flex',
                    justifyContent: 'space-evenly'
                }}
                >
                <img 
                    src={linkedIn}
                    style={{
                        width:'30px'
                    }}
                >
                </img>
                <a href='https://www.linkedin.com/in/oussama-belkacem-767717196/' target="_blank">Here is my LinkedIn</a>
                </div>
            </Card.Text>
            <Card.Text
            style={{
                display:'flex',
                justifyContent: 'center'
            }}
            >
                <div
                style={{
                    width: '10%',
                    display: 'flex',
                    justifyContent: 'space-evenly'
                }}
                >
                <img 
                    src={gmail}
                    style={{
                        width:'30px'
                    }}
                >
                </img>
                <a href="mailto:oussama.blkc@gmail.com" target="_blank">Send me a mail !</a>
                </div>
            </Card.Text>
            <Card.Text>Or, you can send me a message !</Card.Text>
            <Button 
            variant="primary"
            onClick={() => {
                navigate('/contact')
            }}
            style={{
                width:'20%', 
                marginLeft:'auto', 
                marginRight:'auto'
            }}
            >
                Contact me !
            </Button>
        </Card.Body>
        <Card.Footer style={{color: '#3baea0'}}>Belkacem Oussama's website, made with &#x1F4BB; of course ...</Card.Footer>
        </Card>
    </div>
  )
}
