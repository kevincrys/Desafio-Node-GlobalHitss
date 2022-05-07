import React, {useState } from 'react';
import './App.css';
import Header from './Header';

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
        console.log(campos);
         alert('Dados enviados');
    }

  return (
    <div>
    <Header/>



    <div className="card center">
      <div className="card-body">
      <form   onSubmit={submit} align="center">

              <legend>
                  <h2>Cadastro</h2>
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
