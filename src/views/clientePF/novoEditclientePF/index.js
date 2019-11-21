import React from 'react';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './style.css';


class ClientePF extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            linhas: [],
        }
    }


    componentWillMount(){
        const data = [
            {id:1 , nome:"nome 1 nome 1 nome 1 nome 1nome 1" , descricao:" Maecenas dum justo, vel imperdiet sapien wisi sed libero. Suspendisse sagitociosqu ad litora torquent per eget elit. m, nisl ligula egestas nulla, et sollicitudin sem purus in lacus." },
            {id:2 , nome:"nome 2 nome 2 nome 2 nome 2nome 2" , descricao:" Lorem ipam erat volutpat. Nunc auctor. Mauris pretium quam et urna. Fusce r rutrum. Nullam justo enim, cutate nec, fe wisi eu metus. Integer pellentesque quam vel velit. Duis pulvinar." },
            {id:3 , nome:"nome 3 nome 3 nome 3 nome 3nome 3" , descricao:" Praesent sus id tortor. Integer imperdiet lectus quis justo. Integer temporortor porttitor accumsan. Maurgittis velit Integer tempor. Vivamus ac urna vel leo pretium faucibus. Mauris elementum mauris vitae tortor. In dapibus augue non sapien. Aliquam ante. Curabitur bibendum justo non orci." },
            {id:4 , nome:"nome 4 nome 4 nome 4 nome 4nome 4" , descricao:" Etiam popit a, interdum id, felis. Integer vulputate sem a nibh rutrum consce eget urna. Curabitur vitaem." },
            {id:5 , nome:"nome 5 nome 5 nome 5 nome 5nome 5" , descricao:" Morbi leusce aliquam vestibulum ipsum. Aliquam erat volutpat. Pellentesqueleo." },
            {id:6 , nome:"nome 6 nome 6 nome 6 nome 6nome 6" , descricao:" Aenean p magna gravida vehicula. Mauris tincidunt sem sed arcu. Nunc posuegula sapien, pulvinar a, vestibulum quis, facilisis vel, sapien. Nullam eget nisl. Donec vitae arcu." },
    ]
    this.setState({linhas:data});
    }

    removerEntrada(index) {
            if(window.confirm('Tem certeza que deseja deletar este item de forma PERMANENTE?')){
                var auxiliar = this.state.linhas;
                for (var i = auxiliar.length - 1; i >= 0; i--) {
                    if (auxiliar[i].id === index) {
                        auxiliar.splice(i, 1);
                    }
                }
                this.setState({ linhas: auxiliar });
            }
    }
    
    render() {
        return (
            <div className="conteudoPagina bg">
                <div className="tituloPagina">
                    <p>{this.props.nome}</p>
                </div>
                <div className="descricao">
                    
                    <p>{this.props.descricao}</p>
                </div>

                <div className="center">

                

                <table className="tabelaUser">
                            <tr className="thead">
                                <td align="center">Nome</td>
                                <td align="center">Anotação</td>
                                <td align="center">Editar</td>
                                <td align="center">Remover</td>


                            </tr>
                            
                    </table>
                    </div>
            </div>
        );
    }
}

export default ClientePF;