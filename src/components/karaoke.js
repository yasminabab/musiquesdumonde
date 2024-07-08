import './karaoke.css';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import RecordRTC from 'recordrtc';

const Karaoke = () => {
    const [recording, setRecording] = useState(false);
    const [recordedBlob, setRecordedBlob] = useState(null);
    const [videoPlaying, setVideoPlaying] = useState(false);

    const mediaRecorderRef = useRef(null);
    const videoRef = useRef(null);
    
    const startRecording = () => {
        if (videoRef.current && !videoPlaying) {
            videoRef.current.play();
            setVideoPlaying(true);
        }
        navigator.mediaDevices.getUserMedia({ audio : true })
            .then(stream => {
                mediaRecorderRef.current = new RecordRTC(stream, { type: 'audio' });
                mediaRecorderRef.current.startRecording();
                setRecording(true);
            })
            .catch(error => console.error("Erreur. Accès impossible au micro", error));
    }; 

    const stopRecording = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stopRecording(() => {
                const blob = mediaRecorderRef.current.getBlob();
                setRecordedBlob(blob);
            });
            setRecording(false);
            if (videoRef.current && videoPlaying) {
                videoRef.current.pause();
                setVideoPlaying(false);
            }
        }
    };

    return (
        <div className='karaoke-container' style={{textAlign: "center"}}>
            <h1>Votre Karaoké</h1>
            <video ref={videoRef} src="/karaoke-song.mp4" controls/>
            <div className='controls'>
                <button onClick={startRecording} disabled={recording || videoPlaying}>Commencer l'enregistrement</button>
                <button onClick={stopRecording} disabled={!recording}>Arrêter l'enregistrement</button>
                {recordedBlob && <Link to="/result" state={{ recordedBlob }}>Résultat</Link>}
            </div>
        </div>
    );
};

export default Karaoke;