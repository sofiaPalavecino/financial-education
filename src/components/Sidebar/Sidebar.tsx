import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Sidebar = () => {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (menu: any) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Mis gastitos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/">Dashboard</Nav.Link>
            <Nav.Link href="/gastos">Gastos</Nav.Link>
            <Nav.Link href="/logros">Mis logros</Nav.Link>
            <Nav.Link href="/grupos">Grupos</Nav.Link>
            <Nav.Link href="/educacion">Educación</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Sidebar;