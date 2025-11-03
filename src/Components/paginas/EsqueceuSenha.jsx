import { useState } from "react";
import style from './EsqueceuSenha.module.css';


const EsqueceuSenha = () => {
   return (
    <div className={style.conteiner}>
        <form>
            <h1>Redefinir Senha!</h1>
            <div className={style.input}>
                <label name= "novaSenha">Nova Senha: </label>
                <input type="password" name = "email" placeholder='Nova Senha'/> 
            </div>

           <div className={style.input}>
               <label name="ComfirmaSenha">Comfirmar Senha: </label>
               <input type="password" name='senha' placeholder=' Comfirmar Senha'/>
           </div>

           <button>Redefinir</button>

        </form>
    </div>
  )
}

export default EsqueceuSenha;