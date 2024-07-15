import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';
import './header.css';
import { useTranslation } from 'react-i18next';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { CiGlobe } from "react-icons/ci";

export default function AppHeader(){

    const location = useLocation();
    const { pathname } = location; 
    const {t} = useTranslation()
    const {i18n} = useTranslation();
  
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };

    return (
        <Navbar expand="lg" className="">
          <Container>
            <Navbar.Brand as={Link} to="/accueil" className='logo'>{t('musiques-du-monde')}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/accueil" className={`nav-text ${pathname === '/accueil' ? 'active' : ''}`}><span className="underline">{t('accueil')}</span></Nav.Link>
                <Nav.Link as={Link} to="/mission" className={`nav-text ${pathname === '/mission' ? 'active' : ''}`}><span className="underline">{t('notre-mission-1')}</span></Nav.Link>
                <Nav.Link as={Link} to="/rechercher" className={`nav-text ${pathname === '/rechercher' ? 'active' : ''}`}><span className="underline">{t('rechercher-0')}</span></Nav.Link>
                <Nav.Link as={Link} to="/forum" className={`nav-text ${pathname === '/forum' ? 'active' : ''}`}><span className="underline">{t('forum')}</span></Nav.Link>
                <Nav.Link as={Link} to="/playlist" className={`nav-text ${pathname === '/playlist' ? 'active' : ''}`}><span className="underline">{t('mes-playlists')}</span></Nav.Link>
                <Nav.Link as={Link} to="/karaoke" className={`nav-text ${pathname === '/karaoke' ? 'active' : ''}`}><span className="underline">{t('karaoke')}</span></Nav.Link>
              </Nav>
              <Nav className="mr-auto align-items-center">
                <Nav.Link as={Link} to="/connexion" className={`nav-text ${pathname === '/connexion' ? 'active' : ''}`}><span className="underline">{t('se-connecter')}</span></Nav.Link>
                <Button as={Link} to="/creation" className="create-account-btn btn-nav-text">{t('creer-un-compte-0')}</Button>
                <DropdownButton 
                title= {<CiGlobe className='globe-icon'/>}
                className='language-selector'
                >
                  <Dropdown.Item onClick={() => changeLanguage('fr')} className='dropdown-item'>FR</Dropdown.Item>
                  <Dropdown.Item onClick={() => changeLanguage('en')} className='dropdown-item'>EN</Dropdown.Item>
                </DropdownButton>                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}