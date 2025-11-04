import { useState } from "react";
import style from './Cadastro.module.css';

function Cadastro(){
  const [username, setUsername] = useState("");
  const [passemail, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Dados de Cadastro:", { username, password, passemail });
    alert(`Cadastro realizado com sucesso!, ${username}!`);
  };
   return (
    <div className={style.conteiner}>
        <form onSubmit={handleSubmit}>
            <h1>Cadastre-se</h1>
            <div className={style.input}>
                <label name= "nome">Nome: </label>
                <input type="text" name = "nome" placeholder='Nome' onChange = {(e) => setUsername(e.target.value)}/> 
            </div>

            <div className={style.input}>
               <label name="email">Email: </label>
               <input type="email" name='email' placeholder='Email' onChange = {(e) => setEmail(e.target.value)}/>
           </div>

           <div className={style.input}>
               <label name="senha">Senha: </label>
               <input type="password" name='senha' placeholder='Senha' onChange = {(e) => setPassword(e.target.value)}/>
           </div>

           <button>Cadastrar</button>

        </form>
    </div>
  )
}

export default Cadastro;