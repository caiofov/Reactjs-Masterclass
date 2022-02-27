import React from 'react'

//importando os componentes criados
import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'
import CondicionalComIf from './components/CondicionalComIf'

//importando a folha de estilo
import './App.css'
export default (props) => (
<div className='App'>
    {/*o uso de componentes permite que criemos mais de um elemento do mesmo tipo*/}
    <Card titulo="Componente com Parâmetros">
        <ComParametro titulo = "Esse é o título" subtitulo="Esse é subtítulo" />
    </Card>

    <Card titulo="Componente com Filhos">   
        <ComFilhos>
            <ul>
                <li>Ana</li>
                <li>Bia</li>
                <li>Carlos</li>
                <li>Daniel</li>
            </ul>
        </ComFilhos>
    </Card> 
    <Card titulo="Primeiro Componente">
        <Primeiro/>
    </Card>

    <Card titulo= "Repetição">
        <Repeticao></Repeticao>
    </Card>
    <Card titulo = "Condicional">
        <Condicional numero={10}></Condicional>
    </Card>
    <Card titulo = "Condicional com If">
        <CondicionalComIf numero={11}></CondicionalComIf>
    </Card>
</div>);