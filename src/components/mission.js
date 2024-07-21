import './mission.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import missionImage1 from '../assets/mission-img.jpg';
import missionImage2 from '../assets/mission-img2.png';
import { useTranslation } from 'react-i18next';

function Mission(){

    const {t, i18n} = useTranslation();

    const renderText = (key) => {
        if (key === 'joignez-vous' && i18n.language === 'ko') {
            return (
                <>
                    <span className="korean-highlight-mission-1">우리와</span> 
                </>
            );
        }
        if (key === 'a-nous-0' && i18n.language === 'ko') {
            return (
                <>
                    <spam className="korean-highlight-mission-2">함께하세요!</spam>
                </>
            );
        }
        return t(key);
    };

    return(
        <div className='mission-page'>
            <section className='mission-section'>
                    <div className='mission-content1'>
                        <div className='mission-text1'>
                            <h1 className='mission-title'> {t('notre')} <span>{t('notre-mission-2')}</span></h1>
                            <p>{t('nous-croyons-que-la-musique-a-le-pouvoir-de-faire-decouvrir-des-cultures-notre-mission-est-doffrir-une-plateforme-ou-chaque-utilisateur-peut-decouvrir-et-apprecier-la-richesse-musicale-du-monde-entier')}.</p>
                        </div>
                        <img src={missionImage2}/>
                    </div>
            </section>
            <section className='mission-section'>
                <div className='mission-content2'>
                    <img src={missionImage1} className='mission-img2'/>
                    <div className='mission-text2'>
                        <h2 className='mission-subtitle1'>{t('nos')} <span>{t('valeurs')}</span></h2>
                        <ul className='mission-list'>
                            <li>{t('creer-un-espace-ou-toutes-les-voix-et-toutes-les-musiques-sont-valorisees')}</li>
                            <li>{t('permettre-a-chacun-ou-quil-soit-de-decouvrir-de-la-musique')}</li>
                            <li>{t('eclairer-tout-un-chacun-sur-la-diversite-des-traditions-du-monde')}</li>
                            <li>{t('favoriser-les-echanges-et-le-partage-de-cultures-et-de-sonorites')}</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className='mission-section'>
                <div className='mission-text3'>
                    <h2 className='mission-subtitle2'><span>{renderText('joignez-vous')}</span> {renderText('a-nous-0')}</h2>
                    <p>{t('rejoignez-notre-communaute-et-participez-a-notre-mission-de-celebration-de-la-diversite-musicale-que-vous-soyez-un-amateur-de-musique-un-musicien-ou-simplement-curieux-nous-avons-quelque-chose-a-vous-offrir-ensemble-faisons-de-la-musique-un-langage-universel-de-paix-et-dunite')}  </p>
                </div>
                <Button as={Link} to="/creation" className='mission-btn'>{t('creer-un-compte-1')}</Button>
            </section>
        </div>
    );
}

export default Mission;