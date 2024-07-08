import './creation.css';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useLocation } from 'react-router-dom';
import backgroundImage from '../assets/background-img.png';

function Creation(){
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return(   
        <div className='creation-container'>
            <img src={backgroundImage} alt='background' className='background-img'/>
            <div className='creation-overlay'></div>
            <div className='creation-form'>
                <Form>
                    <h2>Créer un compte</h2>
                    <div className='name-inputs-container'>
                        <Form.Group className="" controlId="formName">
                            <Form.Label>Nom</Form.Label>
                            <Form.Control type="text" placeholder="Votre nom" />
                        </Form.Group> 
                        <Form.Group className="" controlId="formPrenom">
                            <Form.Label>Prénom</Form.Label>
                            <Form.Control type="text" placeholder="Votre prénom" />
                        </Form.Group> 
                    </div>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Adresse Mail</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3 pwd-group" controlId="formPassword">
                        <Form.Label htmlFor="inputPassword">Mot de Passe</Form.Label>
                        <div className='pwd-container'>
                            <Form.Control 
                                type={showPassword ? "text" :"password"}
                                id="inputPassword"
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
                        <div>
                            <Form.Label className='confirm-box' htmlFor='inputConfirmPassword'Confirmer le mot de passe></Form.Label>
                        </div>
                        <div className='pwd-container'>
                            <Form.Control 
                                    type={showPassword ? "text" :"password"}
                                    id="inputConfirmPassword"
                                    aria-describedby="confirmPasswordHelpBlock" 
                                    placeholder="Confirmer le Mot de Passe"
                            />
                            <Button variant="link" onClick={togglePasswordVisibility} className='show-password-btn'>
                                {showPassword ? "Masquer le mot de passe" :"Afficher le mot de passe"}
                            </Button>   
                        </div>                     
                        <Form.Text id="passwordHelpBlock" muted>
                        Assurez-vous que les mots de passe correspondent. 
                        </Form.Text>
                    </Form.Group>                  
                    <Button variant="primary" type="submit" className="creation-btn w-100">Créer le compte
                        </Button>                 
                    <div className='text-center mt-3'>
                       <Link to="/connexion">Déjà un compte? Connectez-vous</Link>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default Creation;