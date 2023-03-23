import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { useState } from 'react';
import styls from './styles.css'

function BasicExample( props ) {

  const { title, text, image, backTitle, backText, backImage1, backImage2, backImage3 } = props

  const [showMore, setShowMore] = useState(true)

  const handleShowMore = () => {
    setShowMore(!showMore)
  }

  return (
          showMore ?
              <Card 
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              width: '30rem',
              height: '45rem',
              border:'solid 2px grey', 
              padding:'10px', 
              borderRadius:'10px' 
              }}
            >
              <Card.Img variant="top" src={image} style={{width:'100%'}} />
              <Card.Body>
                <Card.Title className='card_title' >{title}</Card.Title>
                <Card.Text className='card_text' >{text}</Card.Text>
                <Button 
                  variant="primary" 
                  className='card_button' 
                  onClick={handleShowMore}
                >
                  Show more !
                </Button>
              </Card.Body>
            </Card>
            :
              <Card 
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                width: '30rem',
                height: '45rem',
                border:'solid 2px grey', 
                padding:'10px', 
                borderRadius:'10px' 
                }}
              >
              <div 
                className='img' 
                style={{
                  display: 'flex',
                  
                }} 
              >
                <Card.Img variant="top" src={backImage1} style={{width:'100%'}} />
                <Card.Img variant="top" src={backImage2} style={{width:'100%'}} />
                <Card.Img variant="top" src={backImage3} style={{width:'100%'}} />
              </div>
                
                <Card.Body>
                  <Card.Title className='card_title' >{backTitle}</Card.Title>
                  <Card.Text className='card_text' >{backText}</Card.Text>
                  <Button 
                    variant="primary" 
                    className='card_button' 
                    onClick={handleShowMore}
                  >
                    Return
                  </Button>
                </Card.Body>
              </Card>
          
  )
}

BasicExample.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default BasicExample;