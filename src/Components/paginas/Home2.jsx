import React from 'react';
import styles from './Home2.module.css';
import { Link } from 'react-router-dom';


function Home2() {
  return (
    <section className={styles.home_container}>
      <h1>Acesse suas <span>Calculadoras</span></h1>

     <div className={styles.cards}>
      <div className={styles.c_card}>
        <h1>Calculadora Pessoa Física</h1>
        <Link to="/Calculadora-pf">
            <button id='bth'>Acessar</button>
        </Link>
        
      </div>

      <div className={styles.d_card}>
        <h1>Calculadora Pessoa Jurídica</h1>
        <Link to="/Calculadora-pj">
            <button id='btn'>Acessar</button>
        </Link>
      </div>

      </div>
      
    </section>
  );
}

export default Home2;