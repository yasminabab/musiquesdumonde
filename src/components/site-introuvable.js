import React from 'react';
import { Link } from 'react-router-dom';
import "./site-introuvable.css";
import { renderMatches } from 'react-router-dom';
import image404 from "../assets/404-img.webp"
import { useTranslation } from 'react-i18next';

function SiteIntrouvable() {
  const {t, i18n} = useTranslation();

  return (
    <div className='site-introuvable'>
        <div className="page-introuvable-content">
            <h1>{t('site-introuvable')}</h1>
            <p>{t('la-page-que-vous-recherchez-est-nexiste-pas')}</p>
            <Link to="/accueil" className="btn introuvable-btn btn-primary">{t('acceder-a-laccueil')}</Link>
        </div>
        <div className='error-img'>
            <img src={image404}></img>
        </div>        
    </div>
  );
};

export default SiteIntrouvable