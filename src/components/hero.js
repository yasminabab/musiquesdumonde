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
    const {t} = useTranslation()

    return(
        <div className='welcome-page'>
            <section className='section sectiom1'>
                <Fade direction='left' duration={1500}>
                    <div className='section1-text'>
                        <h1 className='section1-sentence'>{t('explorez-les')} <br />  {t('musiques-du')} <br />  {t('monde')}
                        <span className='colored-text'> {t('sans')} <br />  {t('frontieres')}</span></h1>
                        <p className='section1-p'>{t('plongez-dans-une-aventure-musicale-fascinante-et-explorez-ensemble-les-cultures-du-monde-entier-partagez-des-moments-uniques-en-decouvrant-des-sonorites-et-des-cultures-transcendantes-qui-vous-feront-danser-et-rever')} </p>
                        <div className='button-container'>
                            <Button as={Link} to="/mission" className="hero-btn-primary">{t('notre-mission')}</Button>
                            <Button as={Link} to="/creation" className="hero-btn-secondary">{t('creer-un-compte')}</Button>
                        </div>
                    </div>
                </Fade>
                <Fade direction='right' duration={1500}>
                    <div className='section1-img'>
                        <img src={photo1} />
                    </div>
                </Fade>
            </section>
            <section className='section sectiom2'>
                <Slide direction='left' duration={1500}>
                    <div className='left-content-section2'>
                        <div className='section2-text'>
                            <h2>{t('les')} <br /> <span className='underlined-text'>{t('musiques-du-monde')}</span>
                            <br /> {t('a-votre-disposition')}</h2>
                            <p className='section2-p'> {t('la-musique-a-le-pouvoir-de-transcender-les-frontieres-nous-nous-engageons-a-vous-offrir-une-plateforme-inclusive-ou-chacun-peut-explorer-partager-et-celebrer-la-diversite-musicale-mondiale')}  </p>
                        </div>
                        <div className='section2-btn'>
                                <Button as={Link} to="/mission" className="hero-btn-primary section2-btn">{t('notre-mission-0')}</Button>
                        </div>
                    </div>
                </Slide>
                <Zoom duration={1000} delay={200}>
                    <div className='grid-gallery'>
                        <div className='grid-item'><img src={photo2} alt="" /></div>
                        <div className='grid-item'><img src={photo3} alt="" /></div>
                        <div className='grid-item'><img src={photo4} alt="" /></div>
                        <div className='grid-item'><img src={photo5} alt="" /></div>
                        <div className='grid-item'><img src={photo6} alt="" /></div>
                        <div className='grid-item'><img src={photo7} alt="" /></div>
                    </div>
                </Zoom>
            </section>
            <section className='section sectiom3'>
                <Fade direction="up" duration={1500}>
                    <div className='section3-container'>
                        <h2 className='section3-text'>{t('decouvrez-une')} <span className='underlined-text'>{t('variete')}</span> {t('de-genres-musicaux')}</h2>
                        <div className='card-group'>
                            <div className='hero-card'>
                                <img src={photo8} alt="" className='hero-card-img'/>
                                <div className='hero-card-body'>
                                    <h3>{t('blues')}</h3>
                                    <p>{t('etats-unis')}</p>
                                </div>
                            </div>
                            <div className='hero-card'>
                                <img src={photo9} alt="" className='hero-card-img'/>
                                <div className='hero-card-body'>
                                    <h3>{t('flamenco')}</h3>
                                    <p>{t('espagne')}</p>
                                </div>
                            </div>
                            <div className='hero-card'>
                                <img src={photo10} alt="" className='hero-card-img'/>
                                <div className='hero-card-body'>
                                    <h3>{t('reggada')}</h3>
                                    <p>{t('maroc-0')}</p>
                                </div>
                            </div>
                            <div className='hero-card'>
                                <img src={photo11} alt="" className='hero-card-img'/>
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
                </Fade>
            </section>
            <section className='section sectiom4'>
                <Slide direction='up' duration={1500}>
                    <div section4-wrapper>
                        <h2 className='section4-text'>{t('ce-que-vous-pouvez')} <span className='underlined-text'>faire</span></h2>
                        <ol className='features'>
                            <li>{t('ecouter-vos-chansons-preferees')}</li>
                            <li>{t('rechercher-de-nouvelles-chansons')}</li>
                            <li>{t('participer-a-des-fils-de-discussion')}</li>
                            <li>{t('faire-des-karaokes')}</li>                                                                                
                        </ol>
                    </div>
                </Slide>
            </section>
            <section className='section sectiom5'>
            <Fade direction='up' duration={1500}>
                <h2 className='section5-text'>{t('votre-voyage-commence')} <span className='underlined-text'>{t('maintenant')}</span></h2>
                <div className='section5-btn-container'>
                    <Button as={Link} to="/creation" className='section5-btn'>{t('inscrivez-vous')}</Button>
                </div>
            </Fade>
            </section>                    
        </div>
    );
}

export default Accueil;