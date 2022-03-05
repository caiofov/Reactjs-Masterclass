
import React from "react";

export default (props) => {
    return (
    <div>
        <button onClick={() => {
            props.onClicar(Math.random()) //passando informação para o componente
            }}>Alterar</button>
            {/* A arrow function é importante porque, sem ela, a função onClicar seria executada. Nesse caso, ela está sendo passada como um parâmetro e não sendo executada */}
        {/* Quando o botão for clicado, irá chamar a função do componente pai */}
    </div>
    )
}