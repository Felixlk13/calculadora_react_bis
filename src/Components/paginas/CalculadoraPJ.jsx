import { useState } from "react";
import styles from './CalculadoraPJ.module.css';

function CalculadoraPJ() {
  const [rendaMensal, setRendaMensal] = useState("");
  const [custosMensais, setCustosMensais] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [profissao, setProfissao] = useState("psicologo");
  const [enviarEmail, setEnviarEmail] = useState("");
  const [emailUsuario, setEmailUsuario] = useState("");
  const [resultado, setResultado] = useState(null);
 

  const calculoPJ = (e) => {
    e.preventDefault();
    let renda = parseFloat(rendaMensal);
   
    let proLabore = renda * 0.28;
    
    let inss = proLabore * 0.11;

    let simplesNacional = renda * 0.06;

    let imposto = simplesNacional + inss;

    setResultado(`O valor do imposto a ser pago é R$: ${imposto.toFixed(2)}`);

  }

  return (
    <div className={styles.container}>
      <form onSubmit={calculoPJ}>
        <h1>Calculadora Pessoa Jurídica</h1>

         <div className={styles.input} data-dica="Digite o CNPJ da sua empresa. O CNPJ é obrigatório para pessoa jurídica e deve estar no formato 00.000.000/0000-00.">
          <label htmlFor="cnpj">CNPJ:</label>
          <input 
            type="text" 
            id="cnpj"
            name="cnpj" 
            placeholder="Digite seu CNPJ (00.000.000/0000-00)"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
            maxLength="18"
            required
          />
        </div>
        
        <div className={styles.input} data-dica="É o valor que você espera receber por mês com seu trabalho, antes de descontar despesas.">
          <label htmlFor="rendaMensal">Renda Mensal (até R$ 15.000):</label>
          <input 
            type="number" 
            id="rendaMensal"
            name="rendaMensal" 
            placeholder="Digite sua renda mensal"
            value={rendaMensal}
            onChange={(e) => setRendaMensal(e.target.value)}
            max="15000"
            required
          />
        </div>

        <div className={styles.input} data-dica="São os gastos necessários para seu trabalho acontecer, como aluguel, internet, energia, etc.">
          <label htmlFor="custosMensais">Total de Custos Mensais:</label>
          <input 
            type="number" 
            id="custosMensais"
            name="custosMensais" 
            placeholder="Digite seus custos mensais"
            value={custosMensais}
            onChange={(e) => setCustosMensais(e.target.value)}
            min="0"
            required
          />
        </div>

        <div className={styles.profissaoContainer}>
          <p className={styles.profissaoLabel}>Profissão:</p>
          <div className={styles.profissaoCheckbox}>
            <label>
              <input 
                type="checkbox" 
                checked={profissao === "psicologo"}
                onChange={(e) => setProfissao(e.target.checked ? "psicologo" : "")}
                required
              />
              Psicólogo(a)
            </label>
          </div>
        </div>

        <div className={styles.checkbox}>
          <label>
            <input 
              type="checkbox" 
              checked={enviarEmail}
              onChange={(e) => setEnviarEmail(e.target.checked)}
            />
            Desejo receber os cálculos por e-mail
          </label>
        </div>

      
          <div className={styles.input}>
            <label htmlFor="emailUsuario">Seu E-mail:</label>
            <input 
              type="email" 
              id="emailUsuario"
              name="emailUsuario" 
              placeholder="Digite seu e-mail"
              value={emailUsuario}
              onChange={(e) => setEmailUsuario(e.target.value)}
            />
          </div>
        

        <button type="submit" className={styles.submitButton}>
          Calcular
        </button>
      </form>

      {resultado && (
          <div className="style.resultado">
            {resultado}
          </div>
        )}

    </div>
  );
}

export default CalculadoraPJ;