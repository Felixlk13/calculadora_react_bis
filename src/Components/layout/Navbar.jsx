import { Link } from "react-router-dom";

import Container from "./Container";

import styles from './Navbar.module.css';
import logo from '../../img/calculadora.png';
import logo2 from '../../img/Logo_Unichristus.png'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img className="img" src={logo} alt="Calculadora" />
                </Link>

                <a href="https://www.unichristus.edu.br/" target="_blank" rel="noopener noreferrer">
                    <img className="img2" src={logo2} alt="Unichristus" />
                </a>

                <Link to="/Login">
                    <button>Login</button>
               </Link>
            </Container>
        </nav>
    );
};

export default Navbar;