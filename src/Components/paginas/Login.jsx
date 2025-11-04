import { useState } from "react";
import style from './Login.module.css';
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Dados de Login:", { username, password });
    alert(`Bem-vindo, ${username}!`);
  };

   return (
    <div className={style.conteiner}>
        <form onSubmit={handleSubmit}>
            <h1>Acesse Sua Calculadora</h1>
            <div className={style.input}>
                <label name= "email">Email: </label>
                <input type="email" name = "email" placeholder='Email' required onChange = {(e) => setUsername(e.target.value)} /> 
            </div>

           <div className={style.input}>
               <label name="senha">Senha: </label>
               <input type="password" name='senha' placeholder='Senha' required onChange = {(e) => setPassword(e.target.value)} />
           </div>
            
            <div className={style.esqueceuSenha}>
                <label> 
                    <input type="checkbox" />
                    Lembre de mim
                </label>
               <a href="/EsqueceuSenha">Esqueceu a senha?</a>
           </div>
            
           <Link to="/Home2"><button>Entrar</button></Link>

           <div className={style.Cadastre}>
               <p>Não possui conta? <a href="/Cadastro">Cadastre-se</a></p>
           </div>

        </form>
    </div>
  )
}

export default Login;