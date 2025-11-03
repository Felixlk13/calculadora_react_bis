import React from 'react';
import styles from './Sobre.module.css';

function Sobre() {
  return (
    <section className={styles.sobre_container}>
      <h1>Como nossas Calculadoras funcionam</h1>
      
      <div className={styles.container}>
        <h2 className={styles.h2}>Pessoa Física (PF)</h2>
        
        <p>
          Na <strong>Pessoa Física</strong>, o principal imposto é o <strong>IRRF</strong>, declarado mensalmente pelo <strong>Carnê-Leão / Receita Saúde</strong>.
        </p>
        
        <p>
          Existem <strong>duas formas</strong> de calcular:
        </p>
        
        <table className={styles.tabela}>
          <thead>
            <tr>
              <th>Modalidade</th>
              <th>Como funciona</th>
              <th>Quando usar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Deduções</strong></td>
              <td>
                Base de cálculo = <strong>Receitas − Despesas</strong>. Depois, aplica-se a <strong>tabela progressiva</strong> e subtrai a <strong>parcela a deduzir</strong>.
              </td>
              <td>
                Quando as <strong>despesas</strong> forem <strong>maiores que R$ 607,20</strong>.
              </td>
            </tr>
            <tr>
              <td><strong>Desconto Simplificado</strong></td>
              <td>
                Base de cálculo = <strong>Receita − R$ 607,20</strong> (valor fixo). Não usa despesas.
              </td>
              <td>
                Quando as despesas forem <strong>menores que R$ 607,20</strong>.
              </td>
            </tr>
          </tbody>
        </table>
        
        <div className={styles.info}>
          <strong>Importante:</strong> Quem recebe até <strong>R$ 3.036,00</strong> (2 salários mínimos) fica <strong>isento do IRRF</strong>, pois o desconto simplificado reduz a base para a <strong>primeira faixa da tabela</strong>.
        </div>
      </div>

      <div className={styles.container}>
        <h2 className={styles.h2}>Pessoa Jurídica (PJ)</h2>
        
        <p>
          Na <strong>Pessoa Jurídica (Simples Nacional)</strong>, a tributação é calculada <strong>sobre a receita</strong> da empresa (o valor das <strong>notas fiscais emitidas</strong>).
        </p>
        
        <p><strong>Tributos envolvidos:</strong></p>
        
        <table className={styles.tabela}>
          <thead>
            <tr>
              <th>Tributo</th>
              <th>Como é calculado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>DAS (Simples Nacional)</strong></td>
              <td>Percentual fixo sobre a <strong>receita total</strong>.</td>
            </tr>
            <tr>
              <td><strong>INSS (Pró-labore)</strong></td>
              <td><strong>11%</strong> sobre o valor do <strong>pró-labore</strong>.</td>
            </tr>
            <tr>
              <td><strong>IRRF (Pró-labore)</strong></td>
              <td>Pode usar o mesmo <strong>desconto simplificado</strong> da PF.</td>
            </tr>
          </tbody>
        </table>
        
        <p><strong>Pró-labore obrigatório:</strong></p>
        
        <ul className={styles.lista}>
          <li>Deve ser <strong>28% da receita mensal</strong></li>
          <li>ou <strong>R$ 1.518,00</strong>, se 28% for menor que esse valor.</li>
        </ul>
        
        <p>
          Para receitas de até <strong>R$ 15.000,00</strong>, o <strong>desconto simplificado</strong> no IRRF do pró-labore costuma ser <strong>mais vantajoso</strong>.
        </p>
      </div>  
      <div className={styles.container}>
        <p>
          <strong>Ficou com alguma dúvida ou quer mais informações? Entre em contato com o NAF clicando no botão abaixo ou envie para</strong> <a href="naf@gmail.com" className={styles.email}>naf@gmail.com</a>
        </p>
        
        <button className={styles.btn}>Entre em Contato</button>
      </div>
    </section>
  );
}

export default Sobre;

