import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import './faq.css';
import { useTranslation } from 'react-i18next';

const FAQ = () => {
  const {t, i18n} = useTranslation()

  return (
    <div className="faq-container">
      <h2 className='span-faq'>FAQ</h2>
      <Accordion className='custom-accordion'>
        <Card>
          <Accordion.Item eventKey="0">
            <Accordion.Header>{t('comment-est-ce-que-la-page-de-recherche-fonctionne')}</Accordion.Header>
            <Accordion.Body>
              {t('la-page-de-recherche-vous-permet-de-filtrer-par-plusieurs-criteres-tels-que-le-format-de-musique-le-genre-musical-le-continent-la-langue-et-la-duree-vous-pouvez-egalement-trier-les-resultats-par-ordre-alphabetique-date-de-sortie-ou-avis-vous-avez-aussi-la-possibilite-dafficher-9-chansons-par-page-ou-bien-3-chansons-par-page')} </Accordion.Body>
          </Accordion.Item>
        </Card>
        <Card>
          <Accordion.Item eventKey="1">
            <Accordion.Header>{t('comment-acceder-aux-playlists')}</Accordion.Header>
            <Accordion.Body>
              {t('vous-pouvez-acceder-a-vos-playlists-en-naviguant-vers-la-section-mes-playlists-dans-la-barre-de-navigation-vous-pouvez-selectionner-la-playlist-de-votre-choix-et-ecouter-les-chansons-que-vous-voulez')} </Accordion.Body>
          </Accordion.Item>
        </Card>
        <Card>
          <Accordion.Item eventKey="2">
            <Accordion.Header>{t('est-ce-que-mes-playlists-peuvent-fonctionner-sur-tous-les-browsers')}</Accordion.Header>
            <Accordion.Body>
              {t('oui-nos-playlists-sont-concues-pour-fonctionner-sur-tous-les-navigateurs-modernes-assurez-vous-que-votre-navigateur-est-a-jour-pour-une-meilleure-experience')} </Accordion.Body>
          </Accordion.Item>
        </Card>
        <Card>
          <Accordion.Item eventKey="3">
            <Accordion.Header>{t('comment-faire-le-karaoke')}</Accordion.Header>
            <Accordion.Body>
              {t('pour-faire-du-karaoke-naviguez-vers-la-section-karaoke-dans-la-barre-de-navigation-des-que-vous-cliquez-sur-commencer-lenregistrement-et-que-vous-activez-vote-microphone-vous-pouvez-enregistrer-votre-performance-tout-en-regardant-les-paroles-apres-avoir-clique-sur-arreter-lenregistrement-vous-aurez-un-nouveau-bouton-qui-apparait-et-qui-vous-permet-decouter-votre-enregistrement-et-de-le-telecharger')} </Accordion.Body>
          </Accordion.Item>
        </Card>
      </Accordion>
    </div>
  );
}
export default FAQ;
