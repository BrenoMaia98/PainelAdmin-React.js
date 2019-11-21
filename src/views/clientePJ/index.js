import React from 'react';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './style.css';


class ClientePJ extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            linhas: [],
        }
    }


    componentWillMount() {
        const data = [
            { id: 1, nome: "nome 1 nome 1 nome 1 nome 1nome 1", anotacao: "sem anotação", localizacao: " Maecenas dum justo, vel imperdiet sapien wisi sed libero. Suspendisse sagitociosqu ad litora torquent per eget elit. m, nisl ligula egestas nulla, et sollicitudin sem purus in lacus." },
            { id: 2, nome: "nome 2 nome 2 nome 2 nome 2nome 2", anotacao: "sem anotação", localizacao: " Lorem ipam erat volutpat. Nunc auctor. Mauris pretium quam et urna. Fusce r rutrum. Nullam justo enim, cutate nec, fe wisi eu metus. Integer pellentesque quam vel velit. Duis pulvinar." },
            { id: 3, nome: "nome 3 nome 3 nome 3 nome 3nome 3", anotacao: "sem anotação", localizacao: " Praesent sus id tortor. Integer imperdiet lectus quis justo. Integer temporortor porttitor accumsan. Maurgittis velit Integer tempor. Vivamus ac urna vel leo pretium faucibus. Mauris elementum mauris vitae tortor. In dapibus augue non sapien. Aliquam ante. Curabitur bibendum justo non orci." },
            { id: 4, nome: "nome 4 nome 4 nome 4 nome 4nome 4", anotacao: "sem anotação", localizacao: " Etiam popit a, interdum id, felis. Integer vulputate sem a nibh rutrum consce eget urna. Curabitur vitaem." },
            { id: 5, nome: "nome 5 nome 5 nome 5 nome 5nome 5", anotacao: "sem anotação", localizacao: " Morbi leusce aliquam vestibulum ipsum. Aliquam erat volutpat. Pellentesqueleo." },
            { id: 6, nome: "nome 6 nome 6 nome 6 nome 6nome 6", anotacao: "sem anotação", localizacao: " Aenean p magna gravida vehicula. Mauris tincidunt sem sed arcu. Nunc posuegula sapien, pulvinar a, vestibulum quis, facilisis vel, sapien. Nullam eget nisl. Donec vitae arcu." },
        ]
        this.setState({ linhas: data });
    }

    removerEntrada(index) {
        if (window.confirm('Tem certeza que deseja deletar este item de forma PERMANENTE?')) {
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
                    <p>Seção Cliente Pessoa Jurídica</p>
                </div>
                <div className="descricao">
                    <p>Nesta seção é possivel editar, remover e adicionar um novo registro. Basta apenas clicar nos icones da tabela ou no botão abaixo da mesma</p>
                </div>

                <div className="center">


                    <table className="tabelaUser">
                        <thead>
                            <tr className="thead">
                                <td align="center">Nome da Empresa</td>
                                <td align="center">Localização da Sede</td>
                                <td align="center">Anotação</td>
                                <td align="center">Editar</td>
                                <td align="center">Remover</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.linhas.map(row => (
                                <tr className="row" key={row.id}>
                                    <td align="center">{row.nome}</td>
                                    <td align="center">{row.localizacao}</td>
                                    <td align="center">{row.anotacao}</td>
                                    <td align="center">
                                        <NavLink to={{
                                            pathname: `pessoa juridica/edit`,
                                            paramProps: {
                                                nome: "Edição de registro: pessoa jurídica",
                                                descricao: "Altere os campos desejados e clique em concluir para finalizar.",
                                                id: row.id,
                                                adicao: false
                                            }
                                        }}>
                                            <FontAwesomeIcon icon={faEdit} size="lg" className="App-icon" />
                                        </NavLink>
                                    </td>
                                    <td  align="center">
                                        <FontAwesomeIcon  onClick={() => this.removerEntrada(row.id)} icon={faTrashAlt} size="lg" className="App-icon" />
                                    </td>
                                </tr>
                            ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ClientePJ;