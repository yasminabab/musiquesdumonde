import './connexion.css';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/background-img.png';
import { useTranslation } from 'react-i18next';

function Connexion(){
    const {t, i18n} = useTranslation();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const validateForm = () => {
        const errors = {};
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!email) {
            errors.email = t('ladresse-mail-est-requise-1')
        } else if (!regex.test(email)) {
            errors.email = t('ladresse-mail-est-invalide-1')
        }

        if (!password) {
            errors.password = t('le-mot-de-passe-est-requis-1')
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm(); 
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
        } else {
            const username = email.split("@")[0];
            navigate("/playlist", {state: {username}});
        }
    };

    return(   
        <div className='connexion-container'>
            <img src={backgroundImage} alt='background' className='background-img'/>
            <div className='creation-overlay'></div>
            <div className='connexion-form'>
                <Form onSubmit={handleSubmit}>
                    <h2>{t('se-connecter-0')}</h2>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>{t('adresse-mail-0')}</Form.Label>
                        <Form.Control 
                            type="email"
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                            isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>                                                    
                    </Form.Group>
                    <Form.Group className="mb-3 pwd-group" controlId="formPassword">
                        <Form.Label htmlFor="inputPassword5">{t('mot-de-passe-1')}</Form.Label>
                        <div className='pwd-container'>
                            <Form.Control 
                                type={showPassword ? "text" :"password"}
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)}
                                isInvalid={!!errors.password}
                            />
                            <Button variant="link" onClick={togglePasswordVisibility} className='show-password-btn'>
                                {showPassword ? t('masquer-le-mot-de-passe') : t('afficher-le-mot-de-passe-0')}
                            </Button>
                        </div>
                        <Form.Control.Feedback type="invalid" className='d-block'>{errors.password}</Form.Control.Feedback>                                                    
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" className='checkbox' label={t('se-souvenir-de-moi-0')} />
                    </Form.Group>
                    <div className='text-center mb-3'>
                        <Link to="/mdp-oublié" className='text-center'>{t('mot-de-passe-oublie')}</Link>
                    </div>
                    <Button variant="primary" type="submit" className="connexion-btn w-100">{t('se-connecter-1')}</Button>                 
                    <div className='text-center mt-3'>
                       <Link to="/creation">{t('creer-un-compte-3')}</Link>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default Connexion;