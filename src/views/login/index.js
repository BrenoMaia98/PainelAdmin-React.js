import React from 'react';
import { Redirect } from "react-router-dom";
import {auth} from '../../auth';
import './style.css';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.state = {
            redirectToReferrer: false,
            login: '',
            senha: '',
        }
    }



    async login(event) {
        event.preventDefault();
        try{
            //if(this.state.login == "login" && this.state.senha == "123")
                auth.authenticate(this.state.login , this.state.senha,() => {
                            this.setState(() => ({
                              redirectToReferrer: true
                            }));
                        });
            //else alert("Senha ou Login incorretos");
        }catch(err){
            alert(err);
            window.location.replace('/login');
        }
    }

    render() {
        //remover linha abaixo depois de terminar o desenvolvimento
        const { from } = this.props.location.state || { from: { pathname: '/' } }; 
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer === true) {
            return <Redirect to={{ pathname: '/' }} />
        }

        return (
            <div className="AppLogin bg">
                <div className="formBox">
                    <div className="FormTitle">
                        <p  className="title">Login Administrador</p>
                    </div>
                    <div className="FormCenter">
                        <form onSubmit={this.login}>
                            <div className="forms">
                                <label className="forms__Label" htmlFor="name">Usuário</label>
                                <input type="text" id="name" className="forms__Input" placeholder="Entre com o usuário" name="name" onChange={(event) => this.setState({login: event.target.value})}/>
                            </div>
                            <div className="forms">
                                <label className="forms__Label" htmlFor="password">Senha</label>
                                <input type="password" id="password" className="forms__Input" placeholder="Entre com a senha" name="password" onChange={(event) => this.setState({senha: event.target.value})}/>
                            </div>
                            <br/>
                            <div className="buttonDiv">
                                <button className="forms__Button" onClick={(e) => this.login(e)}>Entrar</button>
                            </div>

                        </form>
                    </div> 
                </div>
            </div>
        );
    }
}

export default Login;