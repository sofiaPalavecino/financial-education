import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/nubi.png' 
import './NavBar.scss'

const Sidebar = () => {
  return (

<Navbar expand="lg" className="bg-body-tertiary navbar">
  <Container className="position-relative">
    <Nav className="ms-auto">
      <Nav.Link href="/grupos">Grupos</Nav.Link>
      <Nav.Link href="/educacion">Educación</Nav.Link>
    </Nav>
    <Navbar.Brand href="/home" className="position-absolute start-50 translate-middle-x d-flex align-items-center">
      <img 
        src={logo} 
        alt="Logo" 
        width="60" 
        height="80" 
        className="me-2" 
      />
      <span className="brand-text">NUBIX</span>
    </Navbar.Brand>
  </Container>
</Navbar>


);
};


export default Sidebar;