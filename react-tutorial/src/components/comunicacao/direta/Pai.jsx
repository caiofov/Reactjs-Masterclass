import React from "react";
import Filho from "./Filho";

//tipo de comunicação pai e filho -> o pai passa informações pro filho
export default props =>
    <div>
        <Filho {...props}>João</Filho> {/* ... -> spread: pega todas as propriedades recebidas do pai e passa para o filho*/}
        <Filho sobrenome={props.sobrenome}>Maria</Filho>
        <Filho sobrenome={props.sobrenome}>Pedro</Filho>
    </div>