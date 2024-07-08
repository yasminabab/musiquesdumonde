import './playlist.css';
import { Link } from 'react-router-dom';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';
import playlist1 from '../assets/playlist1.png';
import playlist2 from '../assets/playlist2.jpg';
import playlist3 from '../assets/playlist3.jpg';

const Playlist = () => {
    const playlists = [
        { id: 1, name: 'R&B Old School 🎵', image: playlist1},
        { id: 2, name: 'Vibrations du Monde 🌍', image: playlist2},
        { id: 3, name: 'Tubes Intemporels 💯', image: playlist3},
    ];

    return (
        <div className='playlist-container mt-4'>
            <h1> <span className='span-playlist'>Mes Playlists</span></h1>
            <Row>
                {playlists.map((playlist) => (
                    <Col key={playlist.id} sm={12} md={4}>
                        <Card className='playlist-card mb-4'>
                            <Card.Img variant='top' src={playlist.image} />
                            <Card.Body>
                                <Card.Title>{playlist.name}</Card.Title>
                                <Card.Text>{playlist.description}</Card.Text>
                                <Link to={`/playlist/${playlist.id}`}>
                                    <Button variant="primary" className='playlist-btn'>Accéder à la playlist</Button>
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
