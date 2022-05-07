
import React, {useState } from 'react';
import './App.css';
import Header from './Header';
import axios from 'axios';
function Cadastro() {


  const [campos, setCampos] = useState({
       txtLogin: '',
       txtSenha: '',
       txtEmail: ''
   });
   function updateInputs(event){
       campos[event.target.name] = event.target.value;
       setCampos(campos);
   }

    function submit(event){
        event.preventDefault();
        console.log(campos);
        axios.post('http://localhost:3010/cadastro', campos).then(response => {
        alert('Dados enviados') });


    }

  return (


<div>
<Header/>



<div className="card center">
  <div className="card-body">
  <form  onSubmit={submit} align="center">

          <legend>
              <h2>Cadastro</h2>
          </legend>

          <div>
              <label>Login:
                  <input className="form-control" type="text" name="txtLogin" id="txtNome"  onChange={updateInputs} />
              </label>
          </div>

          <div>
              <label>Senha:
                  <input className="form-control" type="password" name="txtSenha" id="txtSenha"  onChange={updateInputs}/>
              </label>
          </div>
          <div>
              <label>email:
                  <input className="form-control" type="text" name="txtEmail" id="txtEmail" onChange={updateInputs} />
              </label>
          </div>
          <button type="submit" className="btn btn-danger" style={{margin: "2%"}}>Enviar</button>

       </form>
  </div>
</div>


           </div>
  );
}

export default Cadastro;