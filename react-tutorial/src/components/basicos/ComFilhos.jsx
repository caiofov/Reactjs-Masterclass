import React from 'react'
//componente que recebe filhos

export default props =>
<div>
    <h2>Os Filhos:</h2>
    <div>{props.children}</div>
</div>