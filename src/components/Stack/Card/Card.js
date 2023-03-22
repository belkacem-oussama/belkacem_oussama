import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

function BasicExample(props) {

  const { title, text, image } = props

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} style={{width:'100%'}} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

BasicExample.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default BasicExample;