import styles from './Home.module.css';
import savings from '../../img/IrHome.png';

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>Bem-vindo à sua <span>Calculadora</span></h1>
      <p>
        Calcule o IR Pessoa Física 2026 (ano base 2025). Preencha com os dados da sua declaração IR e 
        saiba quanto de benefício fiscal você pode ter.
      </p>

      <img src={savings} alt="login" />

      <div className={styles.container}>
    <h2 className={styles.h2}>Tabela de IR</h2>

    <table className={styles.tabela_ir}>
      <thead>
        <tr>
          <th>Base de cálculo</th>
          <th>Alíquota</th>
          <th>Parcela a deduzir do IR</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Até R$ 2.428,80</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>De R$ 2.428,81 até R$ 2.826,65</td>
          <td>7,5%</td>
          <td className={styles.valor}>R$ 182,16</td>
        </tr>
        <tr>
          <td>De R$ 2.826,66 até R$ 3.751,05</td>
          <td>15%</td>
          <td className={styles.valor}>R$ 394,16</td>
        </tr>
        <tr>
          <td>De R$ 3.751,06 até R$ 4.664,68</td>
          <td>22,5%</td>
          <td className={styles.valor}>R$ 675,49</td>
        </tr>
        <tr>
          <td>Acima de R$ 4.664,68</td>
          <td>27,5%</td>
          <td className={styles.valor}>R$ 908,73</td>
        </tr>
      </tbody>
    </table>

    <p className={styles.legenda}>
      Tabela Progressiva para o cálculo mensal do IRPF para o exercício fiscal de 2026, ano base 2025.
      Faixas começam a valer em 01 de maio de 2025.
    </p>
  </div>

    </section>
  );
}

export default Home;