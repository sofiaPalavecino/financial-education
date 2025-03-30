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
    <Container className="d-flex justify-content-center">
      <Navbar.Brand href="/home" className="d-flex align-items-center">
        <img 
          src={logo} 
          alt="Logo" 
          width="60" 
          height="80" 
          className="me-2" 
        />
        <span className="brand-text">NUBIX</span>
      </Navbar.Brand>
      <Nav >
           <Nav.Link href="/grupos" >Grupos</Nav.Link>
           <Nav.Link href="/educacion">Educación</Nav.Link>
          </Nav>
    </Container>
  </Navbar>
);
};


export default Sidebar;