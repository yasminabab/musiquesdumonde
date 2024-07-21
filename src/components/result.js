import './result.css';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Result = () => {
    const {t, i18n} = useTranslation();
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
            a.download = 'recording.wav';
            a.click();
            URL.revokeObjectURL(url);
        }
    };

    if(!recordedBlob) {
        return <div>{t('pas-denregistrement-retournez-a-la-page-precedente-et-enregistrez-quelque-chose')}</div>
    }

    return (
        <div className='result-page' style={{ textAlign: "center" }}>
            <h1>{t('votre-enregistrement')}</h1>
            {audioUrl && <audio src={audioUrl} controls />}
            <button className='download-btn' onClick={downloadRecording}>{t('telecharger-lenregistrement')}</button>
            <h2>{t('votre-score-100')} <br /> {t('felicitations')}</h2>
            <button className='retry-btn' onClick={() => navigate(-1)}>{t('reessayer')}</button>
        </div>
    );
};

export default Result;
