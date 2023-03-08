import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar style={{position:'fixed', zIndex: '100', width: '100%'}}>
        <Container>
          <Navbar.Brand href="#home">Welcome !</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Présentation</Nav.Link>
            <Nav.Link href="#features">Stack</Nav.Link>
            <Nav.Link href="#pricing">Hobbies</Nav.Link>
            <Nav.Link href="#pricing">Projects</Nav.Link>
            <Nav.Link href="#pricing">Else</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;