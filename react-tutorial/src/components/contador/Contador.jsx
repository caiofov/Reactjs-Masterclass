import React, { Component } from "react";
import Botoes from "./Botoes";
import Display from "./Display";
import PassoForm from "./PassoForm";

export default class Contador extends Component { //criamos uma classe que irá extender a classe de componente react

    // constructor(props){
    //     super(props)

    //     //o estado terá dois valores
    //     this.state = {
    //         passo: props.passo, //de quanto em quanto será adicionado/retirado do contador
    //         valor: 0
    //     }

    // }

    //pode se fazer de uma forma mais simples:
    state = {
        passo: this.props.passo || 1, //de quanto em quanto será adicionado/retirado do contador
        valor: this.props.valor || 0
    }

    render() {
        return (
            <div>
                <h2>Contador</h2>
                <div>
                    <PassoForm passo = {this.state.passo} onPassoChange={this.mudarPasso}></PassoForm>
                    <Display valor = {this.state.valor}></Display>
                </div>
                
                <Botoes onInc = {this.inc} onDec = {this.dec}></Botoes>
            </div>
        )
    }

    //as duas funções a seguir precisam ser arrow functions porque pode dar algum problema em relaçao ao THIS
    inc = () => {
        this.setState({
            valor: this.state.valor + this.state.passo
        })
    }
    dec = () => {
        this.setState({
            valor: this.state.valor - this.state.passo
        })
    }
    //setState -> altera os valores do atributo de um objeto

    mudarPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }
}