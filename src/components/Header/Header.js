import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar style={{position:'fixed', zIndex: '100', width: '100%'}}>
        <Container>
          <Navbar.Brand href="/">Welcome !</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="#">Présentation</Nav.Link>
            <Nav.Link to="#">Stack</Nav.Link>
            <Nav.Link to="#">Projects</Nav.Link>
            <Nav.Link to="#">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;