import { useState } from "react";
import styles from './CalculadoraPF.module.css';

function CalculadoraPF() {
  const [rendaMensal, setRendaMensal] = useState("");
  const [custosMensais, setCustosMensais] = useState("");
  const [profissao, setProfissao] = useState("psicologo");
  const [enviarEmail, setEnviarEmail] = useState("");
  const [emailUsuario, setEmailUsuario] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcularIR = (e) => {
      e.preventDefault();
      let renda = parseFloat(rendaMensal);
      let custos = parseFloat(custosMensais);
      let calculoBase = renda - custos;
      let imposto = 0;

      if (calculoBase <= 2428.80){
       setResultado(`Você está isento de impostos.`)
      } 
       else if(calculoBase >= 2428.80 || calculoBase <= 2826.65){
        imposto = calculoBase * 0.075 - 182.16;
        setResultado(`O valor do imposto a ser pago é R$ ${imposto.toFixed(2)}`)
      } 
      else if(calculoBase >= 2826.66 || calculoBase <= 3751.05){
        imposto = calculoBase * 0.15 - 394.16;
        setResultado(`O valor do imposto a ser pago é R$ ${imposto.toFixed(2)}`)
      } 
      else if(calculoBase >= 3751.06 || calculoBase <= 4664.68){
        imposto = calculoBase * 0.225 - 675.49;
        setResultado(`O valor do imposto a ser pago é R$ ${imposto.toFixed(2)}`)
      } 
      else if(calculoBase > 4664.68){
        imposto = calculoBase * 0.275 - 908.73;
        setResultado(`O valor do imposto a ser pago é R$ ${imposto.toFixed(2)}`)
      }
    };

  return (
    <div className={styles.container}>
      <form onSubmit={calcularIR}>
        <h1>Calculadora Pessoa Física</h1>
        
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
          <div className={styles.resultado}>
            {resultado}
          </div>
        )}

    </div>
  );
}

export default CalculadoraPF;