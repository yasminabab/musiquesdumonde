import './playlistDetails.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import SongCard from './songCard'
import songcover1 from '../assets/song-cover1.jpg';
import songcover2 from '../assets/song-cover2.jpg';
import songcover3 from '../assets/song-cover3.jpg';
import songcover4 from '../assets/song-cover4.jpg';
import songcover5 from '../assets/song-cover5.jpg';
import songcover6 from '../assets/song-cover6.jpg';
import songcover7 from '../assets/song-cover7.jpg';
import songcover8 from '../assets/song-cover8.jpg';
import songcover9 from '../assets/song-cover9.jpg';
import songcover10 from '../assets/song-cover10.jpg';
import songcover11 from '../assets/song-cover11.jpg';
import songcover12 from '../assets/song-cover12.jpg';
import songcover13 from '../assets/song-cover13.jpg';
import songcover14 from '../assets/song-cover14.jpg';
import songcover15 from '../assets/song-cover15.jpg';


const PlaylistDetails = () => {
    const [activeSongIndex, setActiveSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const { id } = useParams();

    const playlists = {
        '1': [
            { id: 1, title: 'Hey oh - Tragédie', url: '/playlist1-song1.mp3', image: songcover1},
            { id: 2, title: 'Are You That Somebody - Aaliyah', url: '/playlist1-song2.mp3', image: songcover2 },
            { id: 3, title: 'Dilemma - Kelly Rowland & Nelly', url: '/playlist1-song3.mp3', image: songcover3 },
            { id: 4, title: 'Let Me Love You - Mario', url: '/playlist1-song4.mp3', image: songcover4 },
            { id: 5, title: 'U Got It Bad - Usher', url: '/playlist1-song5.mp3', image: songcover5 },
        ], 
        '2': [
            { id: 1, title: 'Waving Flag - K\'NAAN', url: '/playlist2-song1.mp3', image: songcover6 },
            { id: 2, title: 'Volare - Gipsy Kings', url: '/playlist2-song2.mp3', image: songcover7 },
            { id: 3, title: 'Viva la vida - Coldplay', url: '/playlist2-song3.mp3', image: songcover8 },
            { id: 4, title: 'Waka Waka - Shakira', url: '/playlist2-song4.mp3', image: songcover9 },
            { id: 5, title: 'We Are The Champions - Queen', url: '/playlist2-song5.mp3', image: songcover10 },
        ], 
        '3': [
            { id: 1, title: 'Somewhere Over The Rainbow - Israel Kamakawiwo\'ole', url: '/playlist3-song1.mp3', image: songcover11 },
            { id: 2, title: 'Billie Jean - Michael Jackson', url: '/playlist3-song2.mp3', image: songcover12 },
            { id: 3, title: 'I will always love you - Whitney Houston', url: '/playlist3-song3.mp3', image: songcover13 },
            { id: 4, title: 'My Heart Will Go On - Celine Dion', url: '/playlist3-song4.mp3', image: songcover14 },
            { id: 5, title: 'Je t\'aime - Lara Fabian', url: '/playlist3-song5.mp3', image: songcover15 },
        ], 
    };

    const songs = playlists[id] || [];

    const handlePlay = (index) => {
        setActiveSongIndex(index);
        setIsPlaying(true);
    };

    const handlePause = () => {
        setIsPlaying(false);
    }; 

    const handlePrevious = () => {
        setIsPlaying(false);
        setActiveSongIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : songs.length - 1));
    };

    const handleNext = () => {
        setIsPlaying(false);
        setActiveSongIndex((prevIndex) => (prevIndex < songs.length - 1 ? prevIndex + 1 : 0));
    };

    return (
        <Container className='playlist-details mt-4'>
            <Link to="/playlist">
                <Button className="backplaylist-btn mb-4">Retour aux Playlists</Button>
            </Link>  
            <div className='playlist-details-container'>
                <h1><span className='span-playlist'>Ma Playlist</span></h1>
                <div className='song-carousel'>
                    {songs.map((song, index) => (
                        <div
                        key={song.id}
                        className={`song-col ${index === activeSongIndex ? 'zoomed' : ''}`}
                        style={{
                            transform: `rotateY(${(index - activeSongIndex) * 60}deg) translateZ(300px)`,
                        }}
                        >
                            <SongCard
                                song={song}
                                isActive={index === activeSongIndex}
                                isPlaying={isPlaying && index === activeSongIndex}
                                onPlay={() => handlePlay(index)} 
                                onPause={handlePause}
                                onPrevious={handlePrevious}
                                onNext={handleNext}
                                onEnded={handleNext}
                            />
                        </div>
                    ))}
                </div>              
            </div>
        </Container>
    );
};

export default PlaylistDetails;