import './connexion.css';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useLocation } from 'react-router-dom';
import backgroundImage from '../assets/background-img.png';

function Connexion(){
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return(   
        <div className='connexion-container'>
            <img src={backgroundImage} alt='background' className='background-img'/>
            <div className='creation-overlay'></div>
            <div className='connexion-form'>
                <Form>
                    <h2>Se connecter</h2>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Adresse Mail</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3 pwd-group" controlId="formPassword">
                        <Form.Label htmlFor="inputPassword5">Mot de Passe</Form.Label>
                        <div className='pwd-container'>
                            <Form.Control 
                                type={showPassword ? "text" :"password"}
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock" 
                                placeholder="Mot de Passe"
                            />
                            <Button variant="link" onClick={togglePasswordVisibility} className='show-password-btn'>
                                {showPassword ? "Masquer le mot de passe" :"Afficher le mot de passe"}
                            </Button>
                        </div>
                        <Form.Text id="passwordHelpBlock" muted>
                        Votre mot de passe doit comporter entre 8 et 20 caractères, des lettres 
                        et des chiffres, et ne doit pas contenir d'espaces, 
                        de caractères spéciaux ou d'emoji.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" className='checkbox' label="Se souvenir de moi" />
                    </Form.Group>
                    <div className='text-center mb-3'>
                        <Link to="/mdp-oublié" className='text-center'>Mot de Passe oublié?</Link>
                    </div>
                    <Button variant="primary" type="submit" className="connexion-btn w-100">Se connecter</Button>                 
                    <div className='text-center mt-3'>
                       <Link to="/creation">Créer un compte</Link>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default Connexion;