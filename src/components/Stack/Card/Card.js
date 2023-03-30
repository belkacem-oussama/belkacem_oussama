import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { useState } from 'react';

function CardComponent( props ) {

  const { title, text, image, backTitle, backText, backImage1, backImage2, backImage3 } = props

  const [showMore, setShowMore] = useState(true)

  const handleShowMore = () => {
    setShowMore(!showMore)
  }

  return (
          showMore ?
            <Card className='cards_principal'>
              <Card.Img className='img' variant="top" src={image} style={{borderRadius: '1rem'}} />
              <Card.Body>
                <Card.Title className='cards_principal_title' >{title}</Card.Title>
                <Card.Text className='cards_principal_text' >{text}</Card.Text>
                <Button 
                  variant="primary" 
                  className='cards_principal_button' 
                  onClick={handleShowMore}
                >
                  Discover
                </Button>
              </Card.Body>
            </Card>
            :
            <Card className='cards_principal'>
              <div className='cards_principal_img'>
                <Card.Img variant="top" src={backImage1} style={{borderRadius: '1rem'}}  />
                <Card.Img variant="top" src={backImage2} style={{borderRadius: '1rem'}} />
                <Card.Img variant="top" src={backImage3} style={{borderRadius: '1rem'}} />
              </div>
                <Card.Body>
                  <Card.Title className='cards_principal_title' >{backTitle}</Card.Title>
                  <Card.Text className='cards_principal_text' >{backText}</Card.Text>
                  <Button 
                    variant="primary" 
                    className='cards_principal_button' 
                    onClick={handleShowMore}
                  >
                    Return
                  </Button>
                </Card.Body>
              </Card>
          
  )
}

CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  backTitle: PropTypes.string.isRequired,
  backText: PropTypes.string.isRequired, 
  backImage1: PropTypes.string.isRequired, 
  backImage2: PropTypes.string.isRequired, 
  backImage3: PropTypes.string.isRequired
};

export default CardComponent;