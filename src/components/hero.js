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


function Accueil(){
    return(
        <div className='welcome-page'>
            <section className='section sectiom1'>
                <Fade direction='left' duration={1500}>
                    <div className='section1-text'>
                        <h1 className='section1-sentence'>Explorez les <br />  musiques du <br />  monde, 
                        <span className='colored-text'> sans <br />  frontières.</span></h1>
                        <p className='section1-p'>Plongez dans une aventure musicale fascinante et explorez ensemble les cultures
                            du monde entier. Partagez des moments uniques en découvrant des sonorités et des cultures transcendantes
                            qui vous feront danser et rêver.
                            </p>
                        <div className='button-container'>
                            <Button as={Link} to="/mission" className="hero-btn-primary">Notre Mission</Button>
                            <Button as={Link} to="/creation" className="hero-btn-secondary">Créer un compte</Button>
                        </div>
                    </div>
                </Fade>
                <Fade direction='right' duration={1500}>
                    <div className='section1-img'>
                        <img src={photo1} alt="Explorez" />
                    </div>
                </Fade>
            </section>
            <section className='section sectiom2'>
                <Slide direction='left' duration={1500}>
                    <div className='left-content-section2'>
                        <div className='section2-text'>
                            <h2>Les <br /> <span className='underlined-text'>MUSIQUES DU MONDE</span>
                            <br /> à votre disposition</h2>
                            <p className='section2-p'> La musique a le pouvoir de transcender les frontières. 
                            Nous nous engageons à vous offrir une plateforme inclusive où 
                            chacun peut explorer, partager et célébrer la diversité musicale mondiale. 
                            </p>
                        </div>
                        <div className='section2-btn'>
                                <Button as={Link} to="/mission" className="hero-btn-primary section2-btn">Notre Mission</Button>
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
                        <h2 className='section3-text'>Découvrez une <span className='underlined-text'>variété</span> de genres musicaux</h2>
                        <div className='card-group'>
                            <div className='hero-card'>
                                <img src={photo8} alt="" className='hero-card-img'/>
                                <div className='hero-card-body'>
                                    <h3>Blues</h3>
                                    <p>États-Unis</p>
                                </div>
                            </div>
                            <div className='hero-card'>
                                <img src={photo9} alt="" className='hero-card-img'/>
                                <div className='hero-card-body'>
                                    <h3>Flamenco</h3>
                                    <p>Espagne</p>
                                </div>
                            </div>
                            <div className='hero-card'>
                                <img src={photo10} alt="" className='hero-card-img'/>
                                <div className='hero-card-body'>
                                    <h3>Reggada (الرڭادة)</h3>
                                    <p>Maroc</p>
                                </div>
                            </div>
                            <div className='hero-card'>
                                <img src={photo11} alt="" className='hero-card-img'/>
                                <div className='hero-card-body'>
                                    <h3>Pansori (판소리)</h3>
                                    <p>Corée du Sud</p>
                                </div>
                            </div>
                        </div>         
                        <div className='section3-btn-container'>
                            <h2 className='section3-text-inline'>...Et bien plus encore</h2>
                            <Button as={Link} to="/rechercher" className='hero-btn-secondary section3-btn-inline'>Rechercher</Button></div>
                        </div>
                </Fade>
            </section>
            <section className='section sectiom4'>
                <Slide direction='up' duration={1500}>
                    <div section4-wrapper>
                        <h2 className='section4-text'>Ce que vous pouvez <span className='underlined-text'>faire</span></h2>
                        <ol className='features'>
                            <li>Écouter vos chansons préférées</li>
                            <li>Rechercher de nouvelles chansons</li>
                            <li>Participer à des fils de discussion</li>
                            <li>Faire des karaokés</li>                                                                                
                        </ol>
                    </div>
                </Slide>
            </section>
            <section className='section sectiom5'>
            <Fade direction='up' duration={1500}>
                <h2 className='section5-text'>Votre voyage commence <span className='underlined-text'>maintenant</span></h2>
                <div className='section5-btn-container'>
                    <Button as={Link} to="/creation" className='section5-btn'>Inscrivez-vous!</Button>
                </div>
            </Fade>
            </section>                    
        </div>
    );
}

export default Accueil;