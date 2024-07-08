import './songCard.css';
import { useEffect, useReducer, useRef, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const SongCard = ({ song, isActive, onPlay, onPause, onPrevious, onNext, isPlaying, onEnded }) => {
    const audioRef = useRef(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        if (isActive && isPlaying && audioRef.current) {
            audioRef.current.play();
        } else if (audioRef.current) {
            audioRef.current.pause();
        }
    }, [isActive, isPlaying]);

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            const updateCurrentTime = () => setCurrentTime(audio.currentTime);
            const setAudioData = () => {
                setCurrentTime(audio.currentTime);
                setDuration(audio.duration);
            };
            const handleEnded = () => {
                audio.currentTime = 0;
                onEnded();
            }
            audio.addEventListener('timeupdate', updateCurrentTime);
            audio.addEventListener('loadeddata', setAudioData);
            audio.addEventListener('ended', handleEnded);
            return () => {
                audio.removeEventListener('timeupdate', updateCurrentTime);
                audio.removeEventListener('loadeddata', setAudioData);
                audio.removeEventListener('ended', handleEnded);
            };
        }
    }, [onEnded]);

    useEffect(() => {
        if(isActive && audioRef.current) {
            audioRef.current.currentTime = 0;
        }
    }, [isActive]);

    const handlePlayPause = () => {
        if (audioRef.current) {
            if (audioRef.current.paused) {
                onPlay();
            } else {
                onPause();
            }
        }
    };

    const handleProgressChange = (e) => {
        if (audioRef.current) {
            audioRef.current.currentTime = e.target.value;
        }
    };

    const handleVolumeChange = (e) => {
        if (audioRef.current) {
            audioRef.current.volume = e.target.value;
        }
    };

    return (
        <div className={`song-card ${isActive ? 'active' : ''}`}>
            <Card className='text-center'>
                <div className='image-container'>
                    <Card.Img variant='top' src={song.image} className={`rounded-circle ${isActive && isPlaying ? 'rotate' : ''}`} />
                </div>
                <Card.Body>
                    <Card.Title>{song.title}</Card.Title>
                    <div className='audio-controls'>
                        <audio ref={audioRef}>
                            <source src={song.url} type="audio/mp3"/>
                            Élément audio non supporté. 
                        </audio>
                        <div className='progress-container'>
                            <input
                                type='range'
                                min="0"
                                max={duration}
                                value={currentTime}
                                onChange={handleProgressChange}
                             />
                            <span className='time-span'>{Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60).toString().padStart(2, '0')}/{Math.floor(duration / 60)}:{Math.floor(duration % 60).toString().padStart(2, '0')}</span>    
                        </div>
                        <div className='volume-container'>
                            <input
                                type='range'
                                min="0"
                                max="1"
                                step="0.01"
                                defaultValue="1"
                                onChange={handleVolumeChange}
                             />
                        </div>
                    </div>
                    <div className='btn-controls'>
                        <Button className='previous-btn' onClick={onPrevious}>&lt;&lt;</Button>
                        <Button className='playpause-btn' onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</Button>
                        <Button className='next-btn' onClick={onNext}>&gt;&gt;</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SongCard; 