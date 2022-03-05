//função que retorna um componente que só mostrará seus filhos caso a condicional passada seja verdadeira
// não tem codigo jfx, por isso não importamos o react
export default function (props){
    if(props.test){
        return props.children
    } else{
        return false
    }
}