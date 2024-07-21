import './message.css';
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { useTranslation } from 'react-i18next';
import { format, parseISO } from "date-fns";
import { enUS, fr, es, ko } from "date-fns/locale";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

const locales = {
    fr: fr, 
    en: enUS, 
    es: es, 
    ko: ko,
};

const formatDate = (dateString, locale, language) => {
    const date = parseISO(dateString);
    const formatString = language === "ko" ? "yyyy년 M월 d일 a h:mm" : "Pp";
    return format(date, formatString, { locale });
};

function Message({ message, onLike, likedMessages, onDelete, isOwner}){
    const {t, i18n} = useTranslation();
    const isLiked = likedMessages.includes(message.id);
    const locale = locales[i18n.language] || fr;
    const [showModal, setShowModal] = useState(false);

    const handleLikeClick = () => {
        onLike(message.id, !isLiked);
    };

    const handleDeleteClick = () => {
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    const handleModalConfirm = () => {
        onDelete(message.id);
        setShowModal(false);
    };

    return(
        <div className='message-container'>
            <div className='message-header'>
                <p>{t('poste-le')} {formatDate(message.timestamp, locale, i18n.language)}</p>
                {isOwner && <button className="btn btn-danger" onClick={handleDeleteClick}>{t('supprimer')}</button>}
            </div>
            <div className='message-content'>
                <p>{message.text}</p>
            </div>
            <div className='message-likes'>
                <button
                    className='btn btn-link'
                    onClick={handleLikeClick}
                >
                    {isLiked ? <AiFillLike className="liked-icon" /> : <AiOutlineLike className="unliked-icon" />}
                </button>
                <span className="like-count">{new Intl.NumberFormat(i18n.language).format(message.likes)}</span>
            </div>

            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header>
                    <Modal.Title>{t('confirmation-0')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {t('vous-etes-sur-le-point-de-supprimer-ce-message')} <br /> {t('voulez-vous-continuer-0')}
                </Modal.Body>
                <Modal.Footer>
                    <Button className='cancel-btn' variant="secondary" onClick={handleModalClose}>
                        {t('annuler-0')} </Button>
                    <Button className='confirm-btn' variant='primary' onClick={handleModalConfirm}>
                        {t('confirmer-1')} </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Message;

