import React from 'react';
import { Redirect } from "react-router-dom";
import { auth } from '../../../auth';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './style.css';


class EditUsuario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            linhas: [],
        }
    }


    componentWillMount(){
        const data = [
            {id:1 , nome:"nome1" , descricao:" Maecenas dum justo, vel imperdiet sapien wisi sed libero. Suspendisse sagitociosqu ad litora torquent per eget elit. m, nisl ligula egestas nulla, et sollicitudin sem purus in lacus." },
            {id:2 , nome:"nome 2" , descricao:" Lorem ipam erat volutpat. Nunc auctor. Mauris pretium quam et urna. Fusce r rutrum. Nullam justo enim, cutate nec, fe wisi eu metus. Integer pellentesque quam vel velit. Duis pulvinar." },
            {id:3 , nome:"nome3" , descricao:" Praesent sus id tortor. Integer imperdiet lectus quis justo. Integer temporortor porttitor accumsan. Maurgittis velit Integer tempor. Vivamus ac urna vel leo pretium faucibus. Mauris elementum mauris vitae tortor. In dapibus augue non sapien. Aliquam ante. Curabitur bibendum justo non orci." },
            {id:4 , nome:"nome 4" , descricao:" Etiam popit a, interdum id, felis. Integer vulputate sem a nibh rutrum consce eget urna. Curabitur vitaem." },
            {id:5 , nome:"nome 5" , descricao:" Morbi leusce aliquam vestibulum ipsum. Aliquam erat volutpat. Pellentesqueleo." },
            {id:6 , nome:"nome 6" , descricao:" Aenean p magna gravida vehicula. Mauris tincidunt sem sed arcu. Nunc posuegula sapien, pulvinar a, vestibulum quis, facilisis vel, sapien. Nullam eget nisl. Donec vitae arcu." },
    ]
    this.setState({linhas:data});
    }

    render() {
        return (
            <div className="conteudoPagina bg">
                <div className="titulo">
                    <p>Seção Usuário</p>
                </div>
                <div className="descricao">
                    <p>Nesta seção é possivel editar, remover e adicionar um novo usuário</p>
                </div>

                <div className="center">

                
                <table className="tabelaUser">
                            <tr className="thead">
                                <td align="center">Nome</td>
                                <td align="center">Descrição</td>
                                <td align="center">Editar</td>
                                <td align="center">Remover</td>


                            </tr>
                            {this.state.linhas.map(row => (
                                <tr className="row" key={row.id}>
                                    <td align="center">{row.nome}</td>
                                    <td align="center">{row.descricao}</td>
                                    <td align="center">
                                        <NavLink to={{
                                                     pathname:"SERVIÇOS E PROJETOS/edit", 
                                                     componenteProps:{
                                                        nome: "Edição de Serviços e Projetos", 
                                                        descricao: "Altere os campos desejados e clique em concluir para finalizar.",
                                                        id: row.id,
                                                        adicao:false
                                                    }}}>
                                           <FontAwesomeIcon icon={faEdit} size="lg" className="App-icon" />
                                        </NavLink>
                                    </td>
                                    <td onClick={() => this.removerPacote(row.id)} align="center">
                                        <FontAwesomeIcon icon={faTrashAlt} size="lg" className="App-icon" />
                                    </td>
                                </tr>
                            ))
                            }
                    </table>
                    </div>
            </div>
        );
    }
}

export default EditUsuario;