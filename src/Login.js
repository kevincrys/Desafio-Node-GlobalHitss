
import './App.css';
import Header from './Header';

function Login() {
  return (
    <div>
    <Header/>



    <div className="card center">
      <div className="card-body">
      <form align="center">

              <legend>
                  <h2>Cadastro</h2>
              </legend>

              <div>
                  <label>Login:
                      <input className="form-control" type="text" name="txtNome" id="txtNome" />
                  </label>
              </div>

              <div>
                  <label>Senha:
                      <input className="form-control" type="text" name="txtSenha" id="txtSenha" />
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
