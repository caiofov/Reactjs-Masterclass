import React from 'react'

//importando os componentes criados
import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'

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
</div>);