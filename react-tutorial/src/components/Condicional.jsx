import React from 'react'
//renderização condicional
//exibe um elemento dependendo do parametro
export default props => {
    return (
        <div>
            <h2>O número {props.numero} é </h2>
            {
            props.numero % 2 == 0 ?
            <span>Par</span>
            :<span>ímpar</span>
            }
            
            
        </div>
    )
}