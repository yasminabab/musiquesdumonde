import './creation.css';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/background-img.png';
import { useTranslation } from 'react-i18next';

function Creation(){
    const {t, i18n} = useTranslation();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [validation, setValidation] = useState({
        length: false,
        lowercase: false,
        uppercase: false,
        number: false,
        special: false
    });
    const [showValidation, setShowValidation] = useState(false);
    const [errors, setErrors] = useState({});
    const [showModal, setShowModal] =  useState(false);
    const navigate = useNavigate();
    
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value});
    };

    const handlePasswordChange = (e) => {
        const password = e.target.value;
        setFormData({ ...formData, password});
        validatePassword(password);
    };

    const validatePassword = (password) => {
        const hasLowerCase = /[a-z]/.test(password);
        const hasUpperCase = /[A-Z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecial = /[^a-zA-Z0-9]/.test(password);
        setValidation({
            length: password.length >= 8,
            lowercase: hasLowerCase,
            uppercase: hasUpperCase,
            number: hasNumber,
            special: hasSpecial,
        });
    };

    const validateForm = () => {
        const errors = {};
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!formData.nom) errors.nom = t('le-nom-est-requis');
        if (!formData.prenom) errors.prenom = t('le-prenom-est-requis');
        if (!formData.email) {
            errors.email = t('ladresse-mail-est-requise');
        } else if (!regex.test(formData.email)) {
            errors.email = t('ladresse-mail-est-invalide');
        }
        if (!formData.password) errors.password = t('le-mot-de-passe-est-requis');
        if (formData.password !== formData.confirmPassword) {
            errors.confirmPassword = t('les-mots-de-passe-ne-correspondent-pas');
        }
        return errors; 
    };

    const validateStep = (currentStep) => {
        const errors = {};
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (currentStep === 1) {
            if (!formData.nom) errors.nom = t('le-nom-est-requis-0');
            if (!formData.prenom) errors.prenom = t('le-prenom-est-requis-0');
        } else if (currentStep === 2) {
            if (!formData.email) {
                errors.email = t('ladresse-mail-est-requise-0');
            } else if (!regex.test(formData.email)) {
                errors.email = t('ladresse-mail-est-invalide-0');
            }
        } else if (currentStep === 3) {
            if (!formData.password && !formData.confirmPassword) {
                errors.password = t('le-mot-de-passe-est-requis-0');
                errors.confirmPassword = t('le-mot-de-passe-est-requis-0');
            } else if (!formData.password) {
                errors.password = t('le-mot-de-passe-est-requis-0');
            } else if (!formData.confirmPassword) {
                errors.confirmPassword = t('le-mot-de-passe-est-requis-0');
            } else if (formData.password !== formData.confirmPassword) {
                errors.confirmPassword = t('les-mots-de-passe-ne-correspondent-pas-0');
            } else if (!isPasswordValid()) {
                errors.password = t('le-mot-de-passe-est-invalide');
            }
        }
        setErrors(errors);
        return errors; 
    };

    const isPasswordValid = () => {
        return validation.length && validation.lowercase && validation.uppercase && validation.special;
    };

    const nextStep = () => {
        const errors = validateStep(step);
        if (Object.keys(errors).length === 0) {
            setStep(step + 1);
        }
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm(); 
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return; 
        }
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        navigate("/accueil");
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <div>
                        <Form.Group controlId="formName">
                            <Form.Label>{t('nom')}</Form.Label>
                            <Form.Control 
                                name="nom"
                                type="text" 
                                value={formData.nom}
                                onChange={handleChange}
                                isInvalid={!!errors.nom}
                            />
                            <Form.Control.Feedback type="invalid">{errors.nom}</Form.Control.Feedback>
                        </Form.Group> 
                        <Form.Group controlId="formPrenom">
                            <Form.Label>{t('prenom')}</Form.Label>
                            <Form.Control 
                                name="prenom"
                                type="text" 
                                value={formData.prenom}
                                onChange={handleChange}
                                isInvalid={!!errors.prenom}
                            />
                            <Form.Control.Feedback type="invalid">{errors.prenom}</Form.Control.Feedback>                            
                        </Form.Group>
                        <div className='button-container'>
                            <div></div>
                            <Button className='btn-next' variant="primary" onClick={nextStep}>{t('suivant')}</Button>
                        </div>    
                    </div>
                );
            case 2:
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
                            <Button className='btn-prev' variant="secondary" onClick={prevStep}>{t('precedent')}</Button>
                            <Button className='btn-next' variant="primary" onClick={nextStep}>{t('suivant-0')}</Button>
                        </div>
                    </div>
                );     
            case 3:
                return (
                    <div>
                        <Form.Group className='pwd-group' controlId="formPassword">
                            <Form.Label htmlFor='inputPassword'>{t('mot-de-passe')}</Form.Label>
                            <div className='pwd-container'>
                                <Form.Control 
                                    name="password"
                                    type={showPassword ? "text" :"password"}
                                    id="inputPassword"
                                    aria-describedby="passwordHelpBlock" 
                                    value={formData.password}
                                    onChange={handlePasswordChange}
                                    onFocus={() => setShowValidation(true)}
                                    onBlur={() => setShowValidation(false)}
                                    isInvalid={!!errors.password}
                                />
                                <Button variant="link" onClick={togglePasswordVisibility} className='show-password-btn'>
                                    {showPassword ? t('masquer-le-mot-de-passe-1') : t('afficher-le-mot-de-passe')}
                                </Button>
                            </div>
                            <Form.Control.Feedback className='d-block' type="invalid">{errors.password}</Form.Control.Feedback>                            
                            {showValidation && (
                                <div>
                                    <p className={validation.lowercase ? "valid" : "invalid"}>{t('une-lettre-minuscule')}</p>
                                    <p className={validation.uppercase ? "valid" : "invalid"}>{t('une-lettre-majuscule')}</p>
                                    <p className={validation.number ? "valid" : "invalid"}>{t('un-chiffre')}</p>
                                    <p className={validation.special ? "valid" : "invalid"}>{t('un-caractere-special')}</p>
                                    <p className={validation.length ? "valid" : "invalid"}>{t('8-caracteres-minimum')}</p>
                                </div>
                            )}
                        </Form.Group>  
                        <Form.Group className='pwd-group' controlId="formConfirmPassword">
                            <Form.Label>{t('confirmer-le-mot-de-passe')}</Form.Label>
                            <div className='pwd-container'>
                                <Form.Control 
                                    name="confirmPassword"
                                    type={showPassword ? "text" :"password"}
                                    id="inputConfirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    isInvalid={!!errors.confirmPassword}
                                />
                            </div>
                            <Form.Control.Feedback className='d-block' type="invalid">{errors.confirmPassword}</Form.Control.Feedback>                                                            
                        </Form.Group> 
                        <div className='button-container'>
                            <Button className='btn-prev' variant="secondary" onClick={prevStep}>{t('precedent-0')}</Button>
                            <Button className='btn-next' variant="primary" onClick={nextStep}>{t('suivant-1')}</Button>
                        </div> 
                    </div>
                );   
            case 4:
                return (
                    <div>
                        <h3 className='custom-h3'>{t('etes-vous-sur-e-de-vouloir-creer-un-compte-avec-ces-informations')}</h3>
                        <p><strong>{t('nom-0')} </strong>{formData.nom}</p>
                        <p><strong>{t('prenom-0')} </strong>{formData.prenom}</p>
                        <p><strong>{t('email')} </strong>{formData.email}</p>
                        <div className='button-container'>
                            <Button className='btn-prev' variant="secondary" onClick={prevStep}>{t('retour')}</Button>
                            <Button className='btn-submit' variant="primary" type="submit" onClick={handleSubmit}>{t('creer-le-compte')}</Button>
                        </div> 
                    </div>
                );
            default:
                return null;       
        }
    };

    return(   
        <div className='creation-container'>
            <img src={backgroundImage} alt='background' className='background-img'/>
            <div className='creation-overlay'></div>
            <div className='creation-form'>
                <Form onSubmit={handleSubmit}>
                    <h2>{t('creer-un-compte-2')}</h2>
                    <div className='step-container'>
                        <div className={`step ${step >= 1 ? 'completed' : ''}`}>
                            <div className='circle'>{step > 1 ? '✓': '1'}</div>
                            <div className='label'>{t('nom-1')}</div>
                            <div className={`line first ${step >= 2 ? 'completed' : ''}`}></div>
                        </div>
                        <div className={`step ${step >= 2 ? 'completed' : ''}`}>
                            <div className='circle'>{step > 2 ? '✓': '2'}</div>
                            <div className='label'>{t('email-0')}</div>
                            <div className={`line second ${step >= 3 ? 'completed' : ''}`}></div>
                        </div>
                        <div className={`step ${step >= 3 ? 'completed' : ''}`}>
                            <div className='circle'>{step > 3 ? '✓': '3'}</div>
                            <div className='label'>{t('mot-de-passe-0')}</div>
                            <div className={`line third ${step >= 4 ? 'completed' : ''}`}></div>
                        </div>        
                        <div className={`step ${step >= 4 ? 'completed' : ''}`}>
                            <div className='circle'>{step > 4 ? '✓': '4'}</div>
                            <div className='label'>{t('confirmer')}</div>
                        </div>                  
                    </div>
                    {renderStep()}
                    <div className='text-center mt-3'>
                        <Link to="/connexion">{t('deja-un-compte-connectez-vous')}</Link>
                    </div>
                </Form>
            </div>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header>
                    <Modal.Title>{t('vous-etes-inscrit-e')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{t('bienvenue-a-musiques-du-monde')}</Modal.Body>
                <Modal.Footer>
                    <Button className='btn-modal' variant='primary' onClick={handleCloseModal}>
                        {t('acceder-a-laccueil')} </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Creation;