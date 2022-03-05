import React from 'react'

//importando os componentes criados
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/form/Input'
import Contador from './components/contador/Contador'

//importando a folha de estilo
import './App.css'
export default (props) => (
<div className='App'>
    <Card titulo="#10 - Contador" color="#9C0F5F">
        <Contador passo={10} valor={100}></Contador>
    </Card>
    <Card titulo="#09 - Input" color="#9C0F5F">
        <Input></Input>
    </Card>

    <Card titulo="#08 - Comunicação Indireta">
        <Super></Super>
    </Card>

    <Card titulo="#07 - Comunicação Direta" color="#FA6900">
        <Pai sobrenome="Freitas"></Pai>
    </Card>



    {/*o uso de componentes permite que criemos mais de um elemento do mesmo tipo*/}
    <Card titulo="Componente com Parâmetros">
        <ComParametro titulo = "Esse é o título" subtitulo="Esse é subtítulo" />
    </Card>

    <Card titulo="Componente com Filhos" color="#E94C6F">   
        <ComFilhos>
            <ul>
                <li>Ana</li>
                <li>Bia</li>
                <li>Carlos</li>
                <li>Daniel</li>
            </ul>
        </ComFilhos>
    </Card> 
    <Card titulo="Primeiro Componente" color = "#E94C6F">
        <Primeiro/>
    </Card>

    <Card titulo= "Repetição" color="#E94C6F">
        <Repeticao></Repeticao>
    </Card>
    <Card titulo = "Condicional" color="#FA6900">
        <Condicional numero={10}></Condicional>
    </Card>
    <Card titulo = "Condicional com If" color="#E94C6F">
        <CondicionalComIf numero={11}></CondicionalComIf>
    </Card>
</div>);