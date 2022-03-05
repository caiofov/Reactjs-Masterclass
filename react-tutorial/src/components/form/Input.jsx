import React, {useState} from "react"


export default props =>{
    const [nome, setNome] = useState('Pedro')
    return(
    <div>
        {/*  
            let nome = 'Pedro' ; value={nome} -> controlled component : não será possível alterar seu valor na interface gráfica
            value={null} -> poderá mudar o valor na interface, mas não é recomendado
            value={nome} readOnly -> parará de mostrar a mensagem de erro, mas ainda não será possível alterar na interface
        */}
        <p>{nome}</p>
        <input type="text" value={nome} onChange={e => setNome(e.target.value)}/> {/* recebe um evento e altera o valor do nome para o que está sendo escrito no campo */}
        
    </div>
    )
}