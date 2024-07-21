import './karaoke.css';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RecordRTC from 'recordrtc';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';

const Karaoke = () => {
    const {t, i18n} = useTranslation();
    const [recording, setRecording] = useState(false);
    const [recordedBlob, setRecordedBlob] = useState(null);
    const [videoPlaying, setVideoPlaying] = useState(false);

    const mediaRecorderRef = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
        const bootstrap = require('bootstrap/dist/js/bootstrap.bundle.min.js');
        const tooltipTriggerList = [].slice.call(document.querySelectorAll("button:disabled"));
        const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl, {
                title: t('ce-bouton-est-desactive-0')
            });
        });

        return () => {
            tooltipList.forEach(tooltip => tooltip.dispose());
        };
    }, [recording, videoPlaying]);
    
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
            <h1>{t('votre-karaoke')}</h1>
            <video ref={videoRef} src="/karaoke-song.mp4" controls/>
            <div className='controls'>
                <button onClick={startRecording} disabled={recording || videoPlaying}>{t('commencer-lenregistrement')}</button>
                <button onClick={stopRecording} disabled={!recording}>{t('arreter-lenregistrement')}</button>
                {recordedBlob &&  (
                    <>
                        <p className='result-text'>{t('votre-enregistrement-est-pret')}</p>
                        <Link to="/result" className='result-button' state={{ recordedBlob }}>
                            <span className='text-result'>{t('resultat')}</span>
                        </Link>                    
                    </>
                )}
            </div>
        </div>
    );
};

export default Karaoke;