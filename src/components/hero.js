import './hero.css';
import { Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';
import photo1 from '../assets/hero-photo.jpg';
import photo2 from '../assets/a1.jpg';
import photo3 from '../assets/a2.webp';
import photo4 from '../assets/a3.webp';
import photo5 from '../assets/a4.jpg';
import photo6 from '../assets/a5.png';
import photo7 from '../assets/a6.webp';
import photo8 from '../assets/section3-card1.jpg';
import photo9 from '../assets/section3-card2.jpg';
import photo10 from '../assets/section3-card3.png';
import photo11 from '../assets/section3-card4.jpg';
import { useTranslation } from 'react-i18next';

function Accueil(){
    const {t, i18n} = useTranslation()

    const renderText = (key) => {
        if (key === 'ce-que-vous-pouvez' && i18n.language === 'ko') {
            return (
                <>
                당신이 <spam className="korean-highlight">할</spam> 수 있는 것
                </>
            );
        } 
        return t(key);
    };

    return(
        <div className='welcome-page'>
            <section className='section sectiom1' aria-labelledby='section1-heading'>
                <div className='section1-text'>
                    <div className='main-title-section1'>
                        <h1 id="section1-heading" className='section1-sentence'>{t('explorez-les')} {t('musiques-du')} {t('monde')}
                        <span className='colored-text'> {t('sans')} {t('frontieres')}</span></h1>
                    </div>
                    <div>
                        <p className='section1-p'>
                            {t('plongez-dans-une-aventure-musicale-fascinante-et-explorez-ensemble-les-cultures-du-monde-entier-partagez-des-moments-uniques-en-decouvrant-des-sonorites-et-des-cultures-transcendantes-qui-vous-feront-danser-et-rever')} 
                        </p>
                        <div className='button-container-section1'>
                            <Button as={Link} to="/mission" className="hero-btn-primary">{t('notre-mission')}</Button>
                            <Button as={Link} to="/creation" className="hero-btn-secondary">{t('creer-un-compte')}</Button>
                        </div>
                    </div>
                </div>
                <div className='section1-img'>
                    <img src={photo1} alt={t('person-lying-on-a-colorful-background-with-musical-equipment-wearing-headphones-and-sunglasses-holding-a-vinyl-record-and-a-vintage-camera')}/>
                </div>
            </section>
            <section className='section sectiom2' aria-labelledby='section2-heading'>
                <div className='left-content-section2'>
                    <div className='section2-text'>
                        <h2 id="section2-heading">{t('les')} <br /> <span className='underlined-text'>{t('musiques-du-monde-text')}</span>
                        <br /> {t('a-votre-disposition')}</h2>
                        <p className='section2-p'> {t('la-musique-a-le-pouvoir-de-transcender-les-frontieres-nous-nous-engageons-a-vous-offrir-une-plateforme-inclusive-ou-chacun-peut-explorer-partager-et-celebrer-la-diversite-musicale-mondiale')}  </p>
                    </div>
                    <div className='section2-btn'>
                            <Button as={Link} to="/mission" className="hero-btn-primary section2-btn">{t('notre-mission-0')}</Button>
                    </div>
                </div>
                <div className='grid-gallery'>
                    <div className='grid-item'><img src={photo2} alt={t('two-people-enjoying-music-together-wearing-headphones-and-dancing-while-sitting-on-the-floor')} /></div>
                    <div className='grid-item'><img src={photo3} alt={t('young-woman-outdoors-smiling-and-listening-to-music-on-her-phone-with-headphones')} /></div>
                    <div className='grid-item'><img src={photo4} alt={t('older-man-relaxing-on-a-couch-with-headphones-playing-an-air-guitar-and-smiling')} /></div>
                    <div className='grid-item'><img src={photo5} alt={t('two-people-sitting-together-smiling-and-sharing-a-moment-while-listening-to-music-on-a-mobile-device-with-headphones')} /></div>
                    <div className='grid-item'><img src={photo6} alt={t('family-with-parents-and-a-child-dancing-together-in-a-living-room')} /></div>
                    <div className='grid-item'><img src={photo7} alt={t('older-couple-singing-together-with-the-man-holding-a-microphone-and-the-woman-wearing-headphones-both-smiling')} /></div>
                </div>
            </section>
            <section className='section sectiom3' aria-labelledby="section3-heading">
                <div className='section3-container'>
                    <h2 id="section3-heading" className='section3-text'>{t('decouvrez-une')} <span className='underlined-text'>{t('variete')}</span> {t('de-genres-musicaux')}</h2>
                    <div className='card-group'>
                        <div className='hero-card'>
                            <img src={photo8} alt={t('blues-musician-playing-an-electric-guitar-on-stage')} className='hero-card-img'/>
                            <div className='hero-card-body'>
                                <h3>{t('blues')}</h3>
                                <p>{t('etats-unis')}</p>
                            </div>
                        </div>
                        <div className='hero-card'>
                            <img src={photo9} alt={t('flamenco-dancer-performing-on-stage-with-guitarists-in-the-background')} className='hero-card-img'/>
                            <div className='hero-card-body'>
                                <h3>{t('flamenco')}</h3>
                                <p>{t('espagne')}</p>
                            </div>
                        </div>
                        <div className='hero-card'>
                            <img src={photo10} alt={t('group-of-performers-in-traditional-moroccan-attire-performing-reggada-dance-on-stage')} className='hero-card-img'/>
                            <div className='hero-card-body'>
                                <h3>{t('reggada')}</h3>
                                <p>{t('maroc-0')}</p>
                            </div>
                        </div>
                        <div className='hero-card'>
                            <img src={photo11} alt={t('pansori-performance-with-a-singer-and-a-drummer-in-traditional-korean-attire-on-stage')} className='hero-card-img'/>
                            <div className='hero-card-body'>
                                <h3>{t('pansori')}</h3>
                                <p>{t('coree-du-sud')}</p>
                            </div>
                        </div>
                    </div>         
                    <div className='section3-btn-container'>
                        <h2 className='section3-text-inline'>{t('et-bien-plus-encore')}</h2>
                        <Button as={Link} to="/rechercher" className='hero-btn-secondary section3-btn-inline'>{t('rechercher')}</Button></div>
                    </div>
            </section>
            <section className='section sectiom4' aria-labelledby="section4-heading">
                <div section4-wrapper>
                    <h2 id="section4-heading" className='section4-text'>{renderText('ce-que-vous-pouvez')} <span className='underlined-text'>{t('faire')}</span></h2>
                    <ol className='features'>
                        <li>{t('ecouter-vos-chansons-preferees')}
                            <Button as={Link} to="/playlist" className='feature-btn'>{t('mes-playlists-1')}</Button>
                        </li>
                        <li>{t('rechercher-de-nouvelles-chansons')}
                            <Button as={Link} to="/rechercher" className='feature-btn'>{t('rechercher-1')}</Button>
                        </li>
                        <li>{t('participer-a-des-fils-de-discussion')}
                            <Button as={Link} to="/forum" className='feature-btn'>{t('forum-1')}</Button>
                        </li>
                        <li>{t('faire-des-karaokes')}
                            <Button as={Link} to="/karaoke" className='feature-btn'>{t('karaoke-0')}</Button>
                        </li>                                                                                
                    </ol>
                </div>
            </section>
            <section className='section sectiom5' aria-labelledby="section5-heading">
                <h2 id="section5-heading" className='section5-text'>{t('votre-voyage-commence')} <span className='underlined-text'>{t('maintenant')}</span></h2>
                <div className='section5-btn-container'>
                    <Button as={Link} to="/creation" className='section5-btn'>{t('inscrivez-vous')}</Button>
                </div>
            </section>                    
        </div>
    );
}

export default Accueil;