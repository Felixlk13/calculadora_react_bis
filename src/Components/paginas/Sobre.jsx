import { useState } from 'react';
import styles from './Sobre.module.css';
import emailjs from '@emailjs/browser';

function Sobre() {
  const [showModal, setShowModal] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [emailEnviado, setEmailEnviado] = useState(false);

  const abrirModal = () => {
    setShowModal(true);
  };

  const fecharModal = () => {
    setShowModal(false);
    setNome('');
    setEmail('');
    setMensagem('');
    setEmailEnviado(false);
  };

  const enviarEmail = (e) => {
    e.preventDefault();
    
    const templateParams = {
      from_name: nome,
      email: email,
      message: mensagem
    };

    emailjs.send("service_fxw81yu", "template_3lwh3tc", templateParams, "NnLrKMqI749jBLZyy")
      .then((response) => {
        console.log('Email enviado com sucesso!', response.status, response.text);
        setEmailEnviado(true);
      })
      .catch((error) => {
        console.error('Erro ao enviar email:', error);
        alert('Erro ao enviar email. Tente novamente.');
      });
  };
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
          Ficou com alguma dúvida ou quer mais informações? Entre em contato com o NAF clicando no botão abaixo ou envie email para <strong> naf01.dl@unichristus.edu.br </strong>
        </p>
        
        <button className={styles.btn} onClick={abrirModal}>Entre em Contato</button>
      </div>

      {showModal && (
        <div className={styles.modalOverlay} onClick={fecharModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            {!emailEnviado ? (
              <>
                <h2 className={styles.modalTitulo}>Entre em Contato</h2>
                <form onSubmit={enviarEmail} className={styles.modalForm}>
                  <div className={styles.modalInput}>
                    <label htmlFor="nome">Nome:</label>
                    <input
                      type="text"
                      id="nome"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      placeholder="Digite seu nome"
                      required
                    />
                  </div>

                  <div className={styles.modalInput}>
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Digite seu email"
                      required
                    />
                  </div>

                  <div className={styles.modalInput}>
                    <label htmlFor="mensagem">Qual a sua dúvida?</label>
                    <textarea
                      id="mensagem"
                      value={mensagem}
                      onChange={(e) => setMensagem(e.target.value)}
                      placeholder="Digite sua mensagem"
                      rows="5"
                      required
                    />
                  </div>

                  <button type="submit" className={styles.modalBtnEnviar}>
                    ENVIAR E-MAIL
                  </button>
                </form>
              </>
            ) : (
              <div className={styles.sucessoContainer}>
                <div className={styles.checkIcon}>✓</div>
                <h2 className={styles.sucessoTitulo}>Email Enviado!</h2>
                <p className={styles.sucessoMensagem}>Sua mensagem foi enviada com sucesso.</p>
                <button onClick={fecharModal} className={styles.modalBtnOk}>
                  OK
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Sobre;

