import React from 'react'
//componente que recebe parâmetros
export default (props) =>{
    //props.titulo = "Outro Titulo" -> isso não é permitido, pois as propriedades são imutáveis (permitido apenas leitura, não modificação)
return (
    <>
    <h3>{props.titulo}</h3>
    <p>{props.subtitulo}</p>
    </>
)}