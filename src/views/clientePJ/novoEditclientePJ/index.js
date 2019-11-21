import React from 'react';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './style.css';


class NovoEditClientePJ extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            endereco: [],
            telefones: [],
            proprietario: "",
            nome: "",
            anotacao: "",
            id: 0,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentWillMount() {
        console.log(this.props);
        if (this.props.location.paramProps.id != undefined) {
            this.setState({
                endereco: [{id:0,valor:"Endereço de preencimento numero 1"}],
                telefone: [{id: 0, valor:" 18 997777777"}],
                proprietario: "Breno Strogueia Maia da Cruz",
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert("Cadastrado com sucesso");
    };

    addRemTelefone = (id, tipo) => {
        if (tipo == "add") {
            let aux = this.state.telefones;
            aux.push({ id: this.state.id, valor: "" });
            let idAux = this.state.id;
            idAux++;
            this.setState({ telefones: aux, id: idAux });
        } else {
            if (window.confirm('Tem certeza que deseja deletar este item?')) {
                var auxiliar = this.state.telefones;
                for (var i = auxiliar.length - 1; i >= 0; i--) {
                    if (auxiliar[i].id === id) {
                        auxiliar.splice(i, 1);
                    }
                }
                this.setState({ telefones: auxiliar });
            }
        }
        console.log(this.state.telefones);
    };
    editEndereco = (id, valor) => {
        var auxiliar = this.state.endereco;
        for (var i = auxiliar.length - 1; i >= 0; i--) {
            if (auxiliar[i].id === id) {
                auxiliar[i].valor = valor;
                this.setState({ endereco: auxiliar });
                break;
            }
        }
    };
    editTelefone = (id, valor) => {
        var auxiliar = this.state.telefones;
        for (var i = auxiliar.length - 1; i >= 0; i--) {
            if (auxiliar[i].id === id) {
                auxiliar[i].valor = valor;
                this.setState({ telefones: auxiliar });
                break;
            }
        }
    };

    addRemEndereco = (id, tipo) => {
        if (tipo == "add") {
            let aux = this.state.endereco;
            aux.push({ id: this.state.id, valor: "" });
            let idAux = this.state.id;
            idAux++;
            this.setState({ endereco: aux, id: idAux });
        } else {
            if (window.confirm('Tem certeza que deseja deletar este item?')) {
                var auxiliar = this.state.endereco;
                for (var i = auxiliar.length - 1; i >= 0; i--) {
                    if (auxiliar[i].id === id) {
                        auxiliar.splice(i, 1);
                    }
                }
                this.setState({ endereco: auxiliar });
            }
        }
        console.log(this.state.endereco);
    };

    render() {
        return (
            <div className="conteudoPagina bg">
                <div className="tituloPagina">
                    <p>{this.props.location.paramProps.nome}</p>
                </div>
                <div className="descricao">

                    <p>{this.props.location.paramProps.descricao}</p>
                </div>

                <div>
                    <form className="App-forms" onSubmit={this.handleSubmit} >
                        <div>
                            <label>
                                Nome da Empresa:
                                <input required type="text" name="nome" value={this.state.nome} onChange={(event) => this.setState({ nome: event.target.value })} />
                            </label>
                            <label>
                                Anotação:
                                <input required type="text" name="anotacao" value={this.state.anotacao} onChange={(event) => this.setState({ anotacao: event.target.value })} />
                            </label>
                        </div>
                        <div>
                            <label>
                                Propietário:
                                <input required type="text" name="proprietario" value={this.state.proprietario} onChange={(event) => this.setState({ proprietario: event.target.value })} />
                            </label>
                        </div>
                        <ul className="App-List">
                            <li className="App-ListTitle"> Telefones</li>
                            {this.state.telefones != [] ?
                                this.state.telefones.map(
                                    (item, id) => {
                                        return (
                                            <li key={id}>
                                                <div>
                                                    <label>
                                                        <p> Telefone {id} :</p>
                                                        <input required type="text" value={this.state.telefones[id].valor} name={`telefone${id}`} onChange={(event) => this.editTelefone(id, event.target.value)} />
                                                        <FontAwesomeIcon onClick={() => this.addRemTelefone(id, "rem")} icon={faMinus} size="lg" style={{ marginLeft: '40px' }} />
                                                    </label>
                                                </div>
                                            </li>
                                        )
                                    }
                                )
                                : null
                            }
                            <li key={-1}>
                                <div className="App-AddRemoveDiv">
                                    <FontAwesomeIcon onClick={() => this.addRemTelefone(-1, "add")} icon={faPlus} size="lg" style={{ marginRight: '40px' }} />
                                </div>
                            </li>
                        </ul>

                        <ul className="App-List">
                            <li className="App-ListTitle"> Endereços</li>
                            {this.state.endereco != [] ?
                                this.state.endereco.map(
                                    (item, id) => {
                                        return (
                                            <li key={`endereco${id}`}>
                                                <div>
                                                    <label>
                                                        <p> Endereço {id} :</p>
                                                        <input required type="text" value={this.state.endereco[id].valor}  name={`endereco${id}`} onChange={(event) => this.editEndereco(id, event.target.value)} />
                                                        <FontAwesomeIcon onClick={() => this.addRemEndereco(id, "rem")} icon={faMinus} size="lg" style={{ marginLeft: '40px' }} />
                                                    </label>
                                                </div>
                                            </li>
                                        )
                                    }
                                )
                                : null
                            }
                            <li key={-1}>
                                <div className="App-AddRemoveDiv">
                                    <FontAwesomeIcon onClick={() => this.addRemEndereco(-1, "add")} icon={faPlus} size="lg" style={{ marginRight: '40px' }} />
                                </div>
                            </li>
                        </ul>





                        <div className="App-alignBTN">
                            <button type="submit" variant="contained" size="medium" className="App-Button" style={{ color: 'white' }} >
                                <FontAwesomeIcon icon={faCheck} size="lg" style={{ marginRight: '10px' }} /> Concluir
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        );
    }
}

export default NovoEditClientePJ;