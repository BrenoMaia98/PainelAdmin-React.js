import React, {Component} from 'react';

import './style.css';

class Login extends Component {
  return (
    <div className="container">
      <div className="loginBox">
        <form>
          <div className="formAlign">
            <label>
              Login: 
              <input type="text" className="inputLogin"></input>
            </label>
            <label>
              Senha: 
              <input type="password" className="inputLogin"></input>
            </label>
          </div>
        </form>
      </div>
      
    </div>
  );
}

export default Login;
