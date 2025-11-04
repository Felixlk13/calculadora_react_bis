// Importa o componente 'Link' do React Router para navegar entre páginas sem recarregar o site

import { Link } from 'react-router-dom';
import styles from './LinkButton.module.css';

function LinkButton({ to, text }) {
  return (
    <Link className={styles.btn} to={to}>
      {text}
    </Link>
  );
}

export default LinkButton;
