import { Link } from "react-router-dom";

import Container from "./Container";

import styles from './Navbar.module.css';
import logo from '../../img/calculadora.png';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img className="img" src={logo} alt="Calculadora" />
                </Link>

                <Link to="/Login">
                    <button>Login</button>
               </Link>
            </Container>
        </nav>
    );
};

export default Navbar;