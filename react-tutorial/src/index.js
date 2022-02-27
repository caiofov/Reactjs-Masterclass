import './index.css'
import React from 'react' //poderá não ser usado diretamente, mas não pode ser tirado -> utilizamos a sintaxe jsx (utilizar html com js)
import ReactDOM from 'react-dom'

import App from './App'


ReactDOM.render( //recebe um elemento que eu quero renderizar e em qual elemento ele será renderenrizado
    <App></App>, //elemento a ser renderizado -> pode ser uma string em vez de jsx
    document.getElementById('root') //onde ele será rendenrizado -> single page application
)