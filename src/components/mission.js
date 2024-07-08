import './mission.css';
import { Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';
import missionImage1 from '../assets/mission-img.jpg';
import missionImage2 from '../assets/mission-img2.png';

function Mission(){
    return(
        <div className='mission-page'>
            <section className='mission-section'>
                    <div className='mission-content1'>
                        <Fade direction='left' duration={1500}>
                            <div className='mission-text1'>
                                <h1 className='mission-title'> Notre <span>Mission</span></h1>
                                <p>Nous croyons que la musique a le pouvoir de faire découvrir
                                    des cultures. Notre mission est d'offrir une plateforme 
                                    où chaque utilisateur peut découvrir et apprécier la 
                                    richesse musicale du monde entier.</p>
                            </div>
                        </Fade>
                        <Fade direction='right' duration={1500}>
                            <img src={missionImage2}/>
                        </Fade>
                    </div>
            </section>
            <section className='mission-section'>
                <div className='mission-content2'>
                    <Slide direction='left' duration={1000}>
                        <img src={missionImage1} className='mission-img2'/>
                    </Slide>
                    <Slide direction='right' duration={1000}>
                        <div className='mission-text2'>
                            <h2 className='mission-subtitle1'>Nos <span>Valeurs</span></h2>
                            <ul className='mission-list'>
                                <li><span>Créer</span> un espace où toutes les voix et toutes les musiques sont valorisées.</li>
                                <li><span>Permettre</span> à chacun, où qu'il soit, de découvrir de la musique.</li>
                                <li><span>Éclairer</span> tout un chacun sur la diversité des traditions du monde.</li>
                                <li><span>Favoriser</span> les échanges et le partage de cultures et de sonorités.</li>
                            </ul>
                        </div>
                    </Slide>
                </div>
            </section>
            <section className='mission-section'>
                <Fade direction='up' duration={1000}>
                    <div className='mission-text3'>
                        <h2 className='mission-subtitle2'><span>Joignez-vous</span> à nous!</h2>
                        <p>Rejoignez notre communauté et participez à notre mission de célébration 
                            de la diversité musicale. Que vous soyez un amateur de musique, un 
                            musicien. ou simplement curieux, nous avons quelque chose à vous 
                            offrir. Ensemble, faisons de la musique un langage universel de 
                            paix et d'unité.
                        </p>
                    </div>
                    <Button as={Link} to="/creation" className='mission-btn'>Créer un compte</Button>
                </Fade>
            </section>
        </div>
    );
}

export default Mission;