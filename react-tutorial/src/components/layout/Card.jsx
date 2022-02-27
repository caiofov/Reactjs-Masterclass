import './Card.css'
import React from 'react'

export default props => 
    <div className='Card'> {/* className -> como se define a classe CSS em react */}
        <div className='Conteudo'>
            {props.children}
        </div>
        <div className='Footer'>
            {props.titulo}
        </div>
    </div>