
import React from "react";

export default (props) => {
    return (
    <div>
        <button onClick={() => {
            props.onClicar(Math.random(), 'Gerado') //passando informação para o componente
            }}>Alterar</button>
            {/* 
            A arrow function é importante porque, sem ela, a função onClicar seria executada. Nesse caso, ela está sendo passada como um parâmetro e não sendo executada 
            Poderia ter sido feita uma função em vez de passar a arrow function, mas não será necessario
            */}
        {/* Quando o botão for clicado, irá chamar a função do componente pai */}
    </div>
    )
}