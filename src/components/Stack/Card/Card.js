import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { useState } from 'react';
import styls from './styles.css'

function BasicExample(props) {

  const { title, text, image } = props

  const [showMore, setShowMore] = useState(false)

  const handleShowMore = () => {
    setShowMore(!showMore)
    console.log(showMore);
  }

  return (
          <Card 
          style={{
            width: '30rem', 
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
  );
}

BasicExample.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default BasicExample;