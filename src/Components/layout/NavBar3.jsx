import { Link } from "react-router-dom";

import Container from "./Container";

import styles from './NavBar3.module.css';
import logo from '../../img/calculadora.png';

function Navbar3() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img className="img" src={logo} alt="Calculadora" />
                </Link>

                <ul className={styles.list}>

                    <Link to="sobre">
                        <button>Sobre</button>
                    </Link>

                    <Link to="/">
                        <button>Sair</button>
                    </Link>
                </ul>
            </Container>
        </nav>
    );
};

export default Navbar3;