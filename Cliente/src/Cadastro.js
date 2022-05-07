
import React, {useState } from 'react';
import './App.css';
import Header from './Header';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Cadastro() {
const navigate = useNavigate();

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
        if(campos.txtLogin !=='' && campos.txtSenha !=='' && campos.txtEmail !==''){
        axios.post('http://localhost:3010/cadastro', campos).then(response => {
        alert(response.data.message)
        if(response.data.concluido===true){
         navigate("/");
          }

      });
    }
    else{alert("Preencha todos os campos")}

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
