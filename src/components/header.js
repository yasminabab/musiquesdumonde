import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';
import './header.css';

export default function AppHeader(){

    const location = useLocation();
    const { pathname } = location; 

    return (
        <Navbar expand="lg" className="">
          <Container>
            <Navbar.Brand as={Link} to="/accueil" className='logo'>MUSIQUES DU MONDE</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/accueil" className={`nav-text ${pathname === '/accueil' ? 'active' : ''}`}><span className="underline">Accueil</span></Nav.Link>
                <Nav.Link as={Link} to="/mission" className={`nav-text ${pathname === '/mission' ? 'active' : ''}`}><span className="underline">Notre Mission</span></Nav.Link>
                <Nav.Link as={Link} to="/rechercher" className={`nav-text ${pathname === '/rechercher' ? 'active' : ''}`}><span className="underline">Rechercher</span></Nav.Link>
                <Nav.Link as={Link} to="/forum" className={`nav-text ${pathname === '/forum' ? 'active' : ''}`}><span className="underline">Forum</span></Nav.Link>
                <Nav.Link as={Link} to="/playlist" className={`nav-text ${pathname === '/playlist' ? 'active' : ''}`}><span className="underline">Mes playlists</span></Nav.Link>
                <Nav.Link as={Link} to="/karaoke" className={`nav-text ${pathname === '/karaoke' ? 'active' : ''}`}><span className="underline">Karaoke</span></Nav.Link>
              </Nav>
              <Nav className="ml-auto">
                <Nav.Link as={Link} to="/connexion" className={`nav-text ${pathname === '/connexion' ? 'active' : ''}`}><span className="underline">Se connecter</span></Nav.Link>
                <Button as={Link} to="/creation" className="create-account-btn btn-nav-text">Créer un compte</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}