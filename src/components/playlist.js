import './playlist.css';
import { Link, useLocation } from 'react-router-dom';
import { Alert, Button, Card, Col, Row } from 'react-bootstrap';
import playlist1 from '../assets/playlist1.png';
import playlist2 from '../assets/playlist2.jpg';
import playlist3 from '../assets/playlist3.jpg';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

const Playlist = () => {
    const {t, i18n} = useTranslation();
    const location = useLocation();
    const username = location.state?.username;
    const [showAlert, setShowAlert] = useState(false);


    useEffect(() => {
        if (username) {
            setShowAlert(true);
            const timer = setTimeout(() => {
                setShowAlert(false);
            }, 5000);

            return() => clearTimeout(timer);
        }
    }, [username]);

    const playlists = [
        { id: 1, name: 'R&B Old School 🎵', image: playlist1},
        { id: 2, name: 'Vibrations du Monde 🌍', image: playlist2},
        { id: 3, name: 'Tubes Intemporels 💯', image: playlist3},
    ];

    return (
        <div className='playlist-container mt-4'>
            {showAlert && (
                <Alert variant='success' onClose={() => setShowAlert(false)} dismissible className='custom-alert'>
                    {t('rebonjour')} {username} 
                </Alert>
            )}
            <h1> <span className='span-playlist'>{t('mes-playlists-0')}</span></h1>
            <Row>
                {playlists.map((playlist) => (
                    <Col key={playlist.id} sm={12} md={4}>
                        <Card className='playlist-card mb-4'>
                            <Card.Img variant='top' src={playlist.image} />
                            <Card.Body>
                                <Card.Title>{playlist.name}</Card.Title>
                                <Card.Text>{playlist.description}</Card.Text>
                                <Link to={`/playlist/${playlist.id}`}>
                                    <Button variant="primary" className='playlist-btn'>{t('acceder-a-la-playlist')}</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Playlist;
