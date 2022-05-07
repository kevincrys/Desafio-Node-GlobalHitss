import React, {useState } from 'react';
import './App.css';
import Header from './Header';
import axios from 'axios';

function Login() {

  const [campos, setCampos] = useState({
       txtLogin: '',
       txtSenha: ''

   });
   function updateInputs(event){
       campos[event.target.name] = event.target.value;
       setCampos(campos);
   }

    function submit(event){
        event.preventDefault();

          if(campos.txtLogin !=='' && campos.txtSenha !=='' && campos.txtEmail !==''){
        axios.post('http://localhost:3010/login', campos).then(response => {
          alert(response.data.message)
          if(response.data.concluido===true){
           window.location.replace("https://www.claro.com.br/");
          }

      });
    }
    else{
          alert("Preencha todos os campos")
        }
    }

  return (
    <div>
    <Header/>



    <div className="card center">
      <div className="card-body">
      <form   onSubmit={submit} align="center">

              <legend>
                  <h2>Login</h2>
              </legend>

              <div>
                  <label>Login:
                      <input className="form-control" type="text" name="txtLogin" onChange={updateInputs} id="txtNome" />
                  </label>
              </div>

              <div>
                  <label>Senha:
                      <input className="form-control"  type="password"   name="txtSenha" onChange={updateInputs} id="txtSenha" />
                  </label>
              </div>

              <button type="submit" className="btn btn-danger" style={{margin: "2%"}}>Enviar</button>

           </form>
      </div>
    </div>


               </div>

  );
}

export default Login;
