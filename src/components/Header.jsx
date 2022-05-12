import { Navbar, Container, Nav } from "react-bootstrap";
function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#features">HTML</Nav.Link>
            <Nav.Link href="#pricing">CSS</Nav.Link>
            <Nav.Link href="#pricing">JavaScript</Nav.Link>
            <Nav.Link href="#pricing">React</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
