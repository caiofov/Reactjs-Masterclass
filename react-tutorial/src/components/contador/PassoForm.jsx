import React from "react";

export default (props) => {
    return(
        <div>
            <h4>Passo: {props.passo}</h4>
            <input type="number" value = {props.passo} 
            onChange = {e => props.onPassoChange(+e.target.value)}/> {/* irá mudar o valor do passo para o que está escrito no input. O caractere "+" é apenas para garantir que o valor será numérico*/}     
        </div>
        
    )
}