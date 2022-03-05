import React from "react";
import Sub from "./Sub";


//tipo de comunicação indireta -> filho passa informaçao pro pai mesmo sem ter uma referência dele
export default props =>{
    function quandoClicar(valorGerado){
        alert(valorGerado)
    }
    
    return(
    <div>
        <h4>Valor</h4>
        <Sub onClicar={quandoClicar}>Pedro</Sub>
    </div>
    )
}