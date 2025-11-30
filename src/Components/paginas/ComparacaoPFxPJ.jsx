import { useState } from "react";
import styles from './ComparacaoPFxPJ.module.css';

function ComparacaoPFxPJ() {
  const [rendaMensal, setRendaMensal] = useState("");
  const [custosMensais, setCustosMensais] = useState("");
  const [resultadoPF, setResultadoPF] = useState(null);
  const [resultadoPJ, setResultadoPJ] = useState(null);
  const [detalhesPF, setDetalhesPF] = useState(null);
  const [detalhesPJ, setDetalhesPJ] = useState(null);

  const calcularComparacao = (e) => {
    e.preventDefault();
    let renda = parseFloat(rendaMensal);
    let custos = parseFloat(custosMensais);
    
    // Cálculo Pessoa Física
    let calculoBasePF = renda - custos;
    let impostoPF = 0;
    let faixaPF = "";
    let deducaoPF = 0;

    if (calculoBasePF <= 2428.80) {
      impostoPF = 0;
      faixaPF = "Isento";
      setResultadoPF(`Você está isento de impostos.`);
      setDetalhesPF({
        rendaMensal: renda,
        custosMensais: custos,
        baseCalculo: calculoBasePF,
        faixa: faixaPF,
        imposto: 0
      });
    } else if (calculoBasePF >= 2428.81 && calculoBasePF <= 2826.65) {
      deducaoPF = 182.16;
      impostoPF = calculoBasePF * 0.075 - deducaoPF;
      faixaPF = "7,5%";
      setResultadoPF(`O valor do imposto a ser pago é R$ ${impostoPF.toFixed(2)}`);
      setDetalhesPF({
        rendaMensal: renda,
        custosMensais: custos,
        baseCalculo: calculoBasePF,
        faixa: faixaPF,
        deducao: deducaoPF,
        imposto: impostoPF
      });
    } else if (calculoBasePF >= 2826.66 && calculoBasePF <= 3751.05) {
      deducaoPF = 394.16;
      impostoPF = calculoBasePF * 0.15 - deducaoPF;
      faixaPF = "15%";
      setResultadoPF(`O valor do imposto a ser pago é R$ ${impostoPF.toFixed(2)}`);
      setDetalhesPF({
        rendaMensal: renda,
        custosMensais: custos,
        baseCalculo: calculoBasePF,
        faixa: faixaPF,
        deducao: deducaoPF,
        imposto: impostoPF
      });
    } else if (calculoBasePF >= 3751.06 && calculoBasePF <= 4664.68) {
      deducaoPF = 675.49;
      impostoPF = calculoBasePF * 0.225 - deducaoPF;
      faixaPF = "22,5%";
      setResultadoPF(`O valor do imposto a ser pago é R$ ${impostoPF.toFixed(2)}`);
      setDetalhesPF({
        rendaMensal: renda,
        custosMensais: custos,
        baseCalculo: calculoBasePF,
        faixa: faixaPF,
        deducao: deducaoPF,
        imposto: impostoPF
      });
    } else if (calculoBasePF > 4664.68) {
      deducaoPF = 908.73;
      impostoPF = calculoBasePF * 0.275 - deducaoPF;
      faixaPF = "27,5%";
      setResultadoPF(`O valor do imposto a ser pago é R$ ${impostoPF.toFixed(2)}`);
      setDetalhesPF({
        rendaMensal: renda,
        custosMensais: custos,
        baseCalculo: calculoBasePF,
        faixa: faixaPF,
        deducao: deducaoPF,
        imposto: impostoPF
      });
    }

    // Cálculo Pessoa Jurídica
    let proLabore = renda * 0.28;
    let inss = proLabore * 0.11;
    let simplesNacional = renda * 0.06;
    let impostoPJ = simplesNacional + inss;

    setResultadoPJ(`O valor do imposto a ser pago é R$: ${impostoPJ.toFixed(2)}`);
    setDetalhesPJ({
      rendaMensal: renda,
      proLabore: proLabore,
      simplesNacional: simplesNacional,
      inss: inss,
      imposto: impostoPJ
    });
  };

  return (
    <div className={styles.container}>
      <h1>Comparação PF X PJ</h1>
      
      <form onSubmit={calcularComparacao} className={styles.form}>
        <div className={styles.input}>
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

        <div className={styles.input}>
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

        <button type="submit" className={styles.submitButton}>
          Qual a melhor opção?
        </button>
      </form>

      {(resultadoPF || resultadoPJ) && (
        <div className={styles.comparacaoContainer}>
          <div className={styles.coluna}>
            <h2 className={styles.tituloColuna}>Pessoa Física</h2>
            {detalhesPF && (
              <div className={styles.detalhes}>
                <div className={styles.itemDetalhe}>
                  <span className={styles.label}>Renda Mensal:</span>
                  <span className={styles.valor}>R$ {detalhesPF.rendaMensal.toFixed(2)}</span>
                </div>
                <div className={styles.itemDetalhe}>
                  <span className={styles.label}>Custos Mensais:</span>
                  <span className={styles.valor}>R$ {detalhesPF.custosMensais.toFixed(2)}</span>
                </div>
                <div className={styles.itemDetalhe}>
                  <span className={styles.label}>Base de Cálculo:</span>
                  <span className={styles.valor}>R$ {detalhesPF.baseCalculo.toFixed(2)}</span>
                </div>
                {detalhesPF.faixa !== "Isento" && (
                  <>
                    <div className={styles.itemDetalhe}>
                      <span className={styles.label}>Alíquota:</span>
                      <span className={styles.valor}>{detalhesPF.faixa}</span>
                    </div>
                    <div className={styles.itemDetalhe}>
                      <span className={styles.label}>Parcela a deduzir:</span>
                      <span className={styles.valor}>R$ {detalhesPF.deducao.toFixed(2)}</span>
                    </div>
                  </>
                )}
                <div className={styles.resultadoFinal}>
                  <span className={styles.labelFinal}>Total de IR a pagar (Pessoa Física):</span>
                  <span className={styles.valorFinal}>R$ {detalhesPF.imposto.toFixed(2)}</span>
                </div>
              </div>
            )}
            {resultadoPF && (
              <div className={styles.resultado}>
                {resultadoPF}
              </div>
            )}
          </div>

          <div className={styles.coluna}>
            <h2 className={styles.tituloColuna}>Pessoa Jurídica</h2>
            {detalhesPJ && (
              <div className={styles.detalhes}>
                <div className={styles.itemDetalhe}>
                  <span className={styles.label}>Renda Mensal:</span>
                  <span className={styles.valor}>R$ {detalhesPJ.rendaMensal.toFixed(2)}</span>
                </div>
                <div className={styles.itemDetalhe}>
                  <span className={styles.label}>28% da Renda (Pró-labore):</span>
                  <span className={styles.valor}>R$ {detalhesPJ.proLabore.toFixed(2)}</span>
                  <span className={styles.observacao}></span>
                </div>
                <div className={styles.itemDetalhe}>
                  <span className={styles.label}>Simples Nacional (6%):</span>
                  <span className={styles.valor}>R$ {detalhesPJ.simplesNacional.toFixed(2)}</span>
                </div>
                <div className={styles.itemDetalhe}>
                  <span className={styles.label}>INSS pró-labore (11%):</span>
                  <span className={styles.valor}>R$ {detalhesPJ.inss.toFixed(2)}</span>
                </div>
                <div className={styles.itemDetalhe}>
                  <span className={styles.label}>IR:</span>
                  <span className={styles.valor}>Isento</span>
                  <span className={styles.observacao}></span>
                </div>
                <div className={styles.resultadoFinal}>
                  <span className={styles.labelFinal}>Total a pagar (Pessoa Jurídica):</span>
                  <span className={styles.valorFinal}>R$ {detalhesPJ.imposto.toFixed(2)}</span>
                </div>
              </div>
            )}
            {resultadoPJ && (
              <div className={styles.resultado}>
                {resultadoPJ}
              </div>
            )}
          </div>
        </div>
      )}

      {(detalhesPF && detalhesPJ) && (
        <div className={styles.diferencaContainer}>
          <h3 className={styles.tituloDiferenca}>Diferença</h3>
          <div className={styles.diferenca}>
            {detalhesPF.imposto > detalhesPJ.imposto ? (
              <p className={styles.mensagemDiferenca}>
                A <strong>Pessoa Jurídica</strong> é mais vantajosa, economizando <strong>R$ {(detalhesPF.imposto - detalhesPJ.imposto).toFixed(2)}</strong> por mês.
              </p>
            ) : detalhesPJ.imposto > detalhesPF.imposto ? (
              <p className={styles.mensagemDiferenca}>
                A <strong>Pessoa Física</strong> é mais vantajosa, economizando <strong>R$ {(detalhesPJ.imposto - detalhesPF.imposto).toFixed(2)}</strong> por mês.
              </p>
            ) : (
              <p className={styles.mensagemDiferenca}>
                Ambas as modalidades têm o mesmo valor de impostos.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ComparacaoPFxPJ;

