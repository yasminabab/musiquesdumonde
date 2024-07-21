import './mdp-oublié.css';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/background-img.png';
import { useTranslation } from 'react-i18next';


function MdpOublié(){
    const {t, i18n} = useTranslation();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        email: '',
    });
    const [errors, setErrors] = useState({});
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value});
    };

    const validateForm = () => {
        const errors = {};
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!formData.email) {
            errors.email = t('ladresse-mail-est-requise');
        } else if (!regex.test(formData.email)) {
            errors.email = t('ladresse-mail-est-invalide');
        }
        return errors; 
    };

    const validateStep = (currentStep) => {
        const errors = {};
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (currentStep === 1) {
            if (!formData.email) {
                errors.email = t('ladresse-mail-est-requise-0');
            } else if (!regex.test(formData.email)) {
                errors.email = t('ladresse-mail-est-invalide-0');
            }
        } 
        setErrors(errors);
        return errors; 
    };

    const nextStep = () => {
        const errors = validateStep(step);
        if (Object.keys(errors).length === 0) {
            setShowModal(true);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm(); 
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
        } else {
            setStep(2);
        }
    };

    const handleModalClose = () => setShowModal(false);
    const handleModalConfirm = () => {
        setShowModal(false);
        setStep(2);
    }

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <div>
                        <Form.Group controlId="formEmail">
                            <Form.Label>{t('adresse-mail')}</Form.Label>
                            <Form.Control 
                                name="email"                            
                                type="email" 
                                value={formData.email}
                                onChange={handleChange}
                                isInvalid={!!errors.email}
                            />
                            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>                            
                        </Form.Group>  
                        <div className='button-container'>
                            <div></div>
                            <Button className='btn-next' variant="primary" onClick={nextStep}>{t('suivant-0')}</Button>
                        </div>
                    </div>
                );     
            case 2:
                return (
                    <div>
                        <p><span className='mdp-oublié-custom-h3'>{t('un-email-a-ete-envoye-a-ladresse')}</span> <strong className='mdp-oublié-custom-strong'>{formData.email}</strong></p>
                        <div className='button-container'>
                            <Button className='btn-prev' variant="primary" onClick={() => navigate("/connexion")}>{t('retour-a-la-connexion')}</Button>
                            <div></div>
                        </div> 
                    </div>
                );
            default:
                return null;       
        }
    };

    return(   
        <div className='mdp-oublié-container'>
            <img src={backgroundImage} alt='background' className='background-img'/>
            <div className='creation-overlay'></div>
            <div className='mdp-oublié-form'>
                <Form onSubmit={handleSubmit}>
                    <h2 className='mdp-oublié-title'>{t('mot-de-passe-oublie-0')}</h2>
                    <div className='step-container'>
                        <div className={`step ${step >= 1 ? 'completed' : ''}`}>
                            <div className='circle'>{step > 1 ? '✓': '1'}</div>
                            <div className='label'>{t('email-0')}</div>
                            <div className={`line first ${step >= 1 ? 'completed' : ''}`}></div>
                        </div>
                        <div className={`step ${step >= 2 ? 'completed' : ''}`}>
                            <div className='circle'>{step > 2 ? '✓': '2'}</div>
                            <div className='label'>{t('confirmer')}</div>
                        </div>                  
                    </div>
                    {renderStep()}
                </Form>
            </div>
            
            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header>
                    <Modal.Title>{t('confirmation')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {t('vous-etes-sur-le-point-denvoyer-un-mail-a-ladresse')} <br /> <strong>{formData.email}</strong> 
                    <br /> {t('voulez-vous-continuer')}
                </Modal.Body>
                <Modal.Footer>
                    <Button className='cancel-btn' variant="secondary" onClick={handleModalClose}>
                        {t('annuler')} </Button>
                    <Button className='confirm-btn' variant='primary' onClick={handleModalConfirm}>
                        {t('confirmer-0')} </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default MdpOublié;