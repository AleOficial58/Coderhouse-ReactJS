import {useState} from "react"
import ComponenteA from "./components/ComponenteA"

const App = () => {
//Hocks

const [nombre, setNombre] = useState("Coder")
const [usuario, setUsuario] = useState(null)

const [contador, setContador] = useState(0)

console.log(contador)

    return (
        <>
          <h1>{contador}</h1>
          <button onClick={()=> setContador(contador + 1)}>Sumar</button>
        </>
    )
}

export default App


  
