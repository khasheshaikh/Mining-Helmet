import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">COAL India.</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/monitor">Monitor</Nav.Link>
            <Nav.Link href="/helmet">Helmet</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
