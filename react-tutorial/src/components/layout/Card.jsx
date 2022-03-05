import './Card.css'
import React from 'react'

export default props => 
    <div className='Card' style={{borderColor: props.color || '#000'}}> {/* className -> como se define a classe CSS em react */}
        <div className='Conteudo'>
            {props.children}
        </div>
        <div className='Footer' style={{backgroundColor: props.color || '#000'}}> 
        {/* 
            se tiver uma cor de parametro, irá mudar a cor do background para ser ela. Caso contrário, considerará uma cor padrão 
            duas chaves porque é um objeto
        */}
            {props.titulo}
        </div>
    </div>