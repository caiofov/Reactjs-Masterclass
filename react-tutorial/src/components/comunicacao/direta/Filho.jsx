
import React from "react";

export default props =>
    <div>
        <p>{props.children} {props.sobrenome}</p> {/* componente filho recebe o sobrenome do componente pai -> comunicação entre componentes */}
    </div>