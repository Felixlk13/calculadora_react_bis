import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import style from './Login.module.css';
import { loginUsuario } from '../../services/api';

const Login = () => {
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
      const dados = { email, senha };
      const resposta = await loginUsuario(dados);
      
      // Salvar token e dados do usuário
      localStorage.setItem('token', resposta.token);
      localStorage.setItem('usuario', JSON.stringify(resposta.usuario));
      
      alert(`Bem-vindo, ${resposta.usuario.nome}!`);
      navigate('/Home2'); // Redireciona para home
    } catch (error) {
      const mensagemErro = error.response?.data?.error || 'Erro ao fazer login. Tente novamente.';
      setErro(mensagemErro);
      console.error('Erro no login:', error);
    } finally {
      setCarregando(false);
    }
  };

   return (
    <div className={style.conteiner}>
        <form onSubmit={handleSubmit}>
            <h1>Acesse Sua Calculadora</h1>
            
            {erro && <div style={{color: 'red', marginBottom: '10px'}}>{erro}</div>}
            
            <div className={style.input}>
                <label htmlFor="email">Email: </label>
                <input 
                  type="email" 
                  id="email"
                  name="email" 
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
               />
           </div>
            
            <div className={style.esqueceuSenha}>
                <label> 
                    <input type="checkbox" />
                    Lembre de mim
                </label>
               <a href="/EsqueceuSenha">Esqueceu a senha?</a>
           </div>
            
           <button type="submit" disabled={carregando}>
             {carregando ? 'Entrando...' : 'Entrar'}
           </button>

           <div className={style.Cadastre}>
               <p>Não possui conta? <Link to="/Cadastro">Cadastre-se</Link></p>
           </div>

        </form>
    </div>
  )
}

export default Login;