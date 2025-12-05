import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from './Cadastro.module.css';
import { cadastrarUsuario } from '../../services/api';

function Cadastro(){
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErro("");
    setCarregando(true);

    try {
      const dados = { nome, email, senha };
      console.log('Enviando dados:', dados);
      const resposta = await cadastrarUsuario(dados);
      
      alert(resposta.message || 'Cadastro realizado com sucesso!');
      navigate('/Login'); // Redireciona para login
    } catch (error) {
      console.error('Erro completo:', error);
      console.error('Erro response:', error.response);
      console.error('Erro message:', error.message);
      
      const mensagemErro = error.response?.data?.error || error.message || 'Erro ao cadastrar. Tente novamente.';
      setErro(mensagemErro);
    } finally {
      setCarregando(false);
    }
  };

   return (
    <div className={style.conteiner}>
        <form onSubmit={handleSubmit}>
            <h1>Cadastre-se</h1>
            
            {erro && <div style={{color: 'red', marginBottom: '10px'}}>{erro}</div>}
            
            <div className={style.input}>
                <label htmlFor="nome">Nome: </label>
                <input 
                  type="text" 
                  id="nome"
                  name="nome" 
                  placeholder='Nome' 
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                /> 
            </div>

            <div className={style.input}>
               <label htmlFor="email">Email: </label>
               <input 
                 type="email" 
                 id="email"
                 name='email' 
                 placeholder='Email' 
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 required
               />
           </div>

           <div className={style.input}>
               <label htmlFor="senha">Senha: </label>
               <input 
                 type="password" 
                 id="senha"
                 name='senha' 
                 placeholder='Senha' 
                 value={senha}
                 onChange={(e) => setSenha(e.target.value)}
                 required
                 minLength="6"
               />
           </div>

           <button type="submit" disabled={carregando}>
             {carregando ? 'Cadastrando...' : 'Cadastrar'}
           </button>

        </form>
    </div>
  )
}

export default Cadastro;