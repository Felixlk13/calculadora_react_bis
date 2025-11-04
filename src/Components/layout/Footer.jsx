/// Importa ícones de redes sociais (Facebook, Instagram, LinkedIn) vindos da biblioteca "react-icons/fa"
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';

import styles from './Footer.module.css'

function Footer(){
    return (
    <footer className={styles.footer}>
        <ul className={styles.social_list}>
            <li>
                <FaFacebook />
            </li>
            <li>
                <FaInstagram />
            </li>
            <li>
                <FaLinkedin />
            </li>
        </ul>
        <p className={styles.copy_right}>
            <span>Calculadora  </span> &copy; 2025
        </p>
    </footer>
    );
};

export default Footer;