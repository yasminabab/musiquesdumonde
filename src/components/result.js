import './result.css';
import { useState, useEffect } from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const Result = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { recordedBlob } = location.state || {};
    const [audioUrl, setAudioUrl] = useState(null);

    useEffect(() => {
        if (recordedBlob) {
            const url = URL.createObjectURL(recordedBlob);
            setAudioUrl(url);

            return () => {
                URL.revokeObjectURL(url);
            };
        }
    },  [recordedBlob]);

    const downloadRecording = () => {
        if (recordedBlob) {
            const url = URL.createObjectURL(recordedBlob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'enregistrement.wav';
            a.click();
            URL.revokeObjectURL(url);
        }
    };

    if(!recordedBlob) {
        return <div>Pas d'enregistrement. Retournez à la page précédente et enregistrez quelque chose.</div>
    }

    return (
        <div className='result-page' style={{ textAlign: "center" }}>
            <h1>Votre Enregistrement</h1>
            {audioUrl && <audio src={audioUrl} controls />}
            <button onClick={downloadRecording}>Télécharger l'enregistrement</button>
            <h2>Votre score: 100 <br /> Félicitations!</h2>
            <button onClick={() => navigate(-1)}>Réessayer</button>
        </div>
    );
};

export default Result;
