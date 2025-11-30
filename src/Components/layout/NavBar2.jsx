import { Link } from "react-router-dom";

import Container from "./Container";

import styles from './NavBar2.module.css';
import logo from '../../img/calculadora.png';

function Navbar2() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img className="img" src={logo} alt="Calculadora" />
                </Link>

                <ul className={styles.list}>

                    <Link to="/Home2">
                        <button>Início</button>
                    </Link>

                    <Link to="sobre">
                        <button>Sobre</button>
                    </Link>

                    <Link to="/comparacao-pf-pj">
                        <button>Comparação</button>
                    </Link>

                    <Link to="/">
                        <button>Sair</button>
                    </Link>
                </ul>
            </Container>
        </nav>
    );
};

export default Navbar2;