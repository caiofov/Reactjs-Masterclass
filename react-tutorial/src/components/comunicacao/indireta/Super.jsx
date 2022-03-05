import React, {useState} from "react"; //com o useState, podemos criar dados que podem ser modificados
import Sub from "./Sub";


//tipo de comunicação indireta -> filho passa informaçao pro pai mesmo sem ter uma referência dele
export default props =>{
    const [num, setNum] = useState(0) //num -> dado que será alterado || setNum -> função que será responsável pela alteração do dado
    const [texto, setTexto] = useState("Valor")
    
    function quandoClicar(valorGerado, texto){
        setNum(valorGerado) //sempre que clicar, mudará o valor gerado
        setTexto(texto)
    }
    
    return(
    <div>
        <h4>{texto}: {num} </h4>
        <Sub onClicar={quandoClicar}></Sub>
    </div>
    )
}