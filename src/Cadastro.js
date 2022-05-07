
import React, {useState } from 'react';
import './App.css';
import Header from './Header';
function Cadastro() {

  const [campos, setCampos] = useState({
       txtNome: '',
       txtSenha: '',
       txtEmail: ''
   });
   function handleInputChange(event){
       campos[event.target.name] = event.target.value;
       setCampos(campos);
   }

    function handleFormSubmit(event){
        event.preventDefault();
        console.log(campos);
    }

  return (


<div>
<Header/>



<div className="card center">
  <div className="card-body">
  <form  onSubmit={handleFormSubmit} align="center">

          <legend>
              <h2>Cadastro</h2>
          </legend>

          <div>
              <label>Login:
                  <input className="form-control" type="text" name="txtNome" id="txtNome"  onChange={handleInputChange} />
              </label>
          </div>

          <div>
              <label>Senha:
                  <input className="form-control" type="password" name="txtSenha" id="txtSenha"  onChange={handleInputChange}/>
              </label>
          </div>
          <div>
              <label>email:
                  <input className="form-control" type="text" name="txtEmail" id="txtEmail" onChange={handleInputChange} />
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
