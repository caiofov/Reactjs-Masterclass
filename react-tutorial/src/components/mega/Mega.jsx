import React, { useState } from "react"


export default props => {
    const [numeros, setNumeros] = useState(Array(props.qtdeNumero).fill(0)) //cria um array com a quantidade de numeros informada e preenche com 0's

    function gerarNumerosNaoContidos(array) {
        const min = 1 //número minimo a ser gerado
        const max = 60 //numero maximo a ser gerado
        const num = parseInt(Math.random() * (max - min)) + min
        //caso o array não possua o numero, ira retornar o numero. Caso contrario, chamará novamente a função de forma recursiva para sortear um novo número
        return array.includes(num) ? gerarNumerosNaoContidos(array) : num
    }

    function gerarNumeros() {
        const novoArray = Array(props.qtdeNumero).fill(0)
        .reduce((a) => {
            const novoNumero = gerarNumerosNaoContidos(a)
            return [...a, novoNumero]
        }, []) //iniciará com um array vazio. A cada iteração, pegará o retorno da iteração anterior e sorteará um novo número com base nela. Depois, juntará o array antigo com o novo elemento sorteado, retornando-os
        .sort((a,b) => a - b)
        //sort recebe uma função de comparação -> a e b são os elementos comparados || se o valor for maior de 0, ordena B para um índice anterior a A. caso contrário, ordena para um índice posterior. 

        setNumeros(novoArray)
    }
    return (
        <div>
            <h3>Mega</h3>
            <h4>{numeros.join(' ')}</h4> {/* Une o array e separa os elementos por um espaço  */}
            <button onClick={gerarNumeros}>Gerar números</button>
        </div>
    )
}