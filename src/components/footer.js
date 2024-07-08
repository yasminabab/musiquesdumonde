import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import './footer.css';

function AppFooter(){
    return(
        <div className="body">
            <footer className='footer'>
                <div className='footer-content'>
                    <div className='footer-column'>
                        <p>&copy; {new Date().getFullYear()} Musiques du Monde. Tous droits réservés.</p>
                    </div>
                    <div className='footer-column social-media'>
                        <ul className='social-media-list'>
                            <li className='social-media-item'>
                                <a className="social-media-link" href="https://facebook.com" target='_blank' rel='noopener noreferrer'>
                                    <FaFacebook/>
                                </a>
                            </li>
                            <li className='social-media-item'>
                                <a className="social-media-link" href="https://x.com" target='_blank' rel='noopener noreferrer'>
                                    <FaXTwitter/>
                                </a>
                            </li>
                            <li className='social-media-item'>
                                <a className="social-media-link" href="https://instagram.com" target='_blank' rel='noopener noreferrer'>
                                    <FaInstagram/>
                                </a>
                            </li>
                            <li className='social-media-item'>
                                <a className="social-media-link" href="https://tiktok.com" target='_blank' rel='noopener noreferrer'>
                                    <FaTiktok/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='footer-column'>
                        <p>
                            <BsFillTelephoneFill className="contact-icon"/> +123-456-7890 <br /> 
                            <IoIosMail className="contact-icon"/> contact@musiquesdumonde.com                            
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default AppFooter;