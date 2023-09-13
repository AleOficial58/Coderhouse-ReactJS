import {useState, useEffect} from "react"
import Componente1 from "./components/Componente1"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"


const App = () => {
 

  const [mensaje, setMensaje]= useState("Mensaje Inicial")
  const [contador, setContador] = useState(0)

    useEffect(()=>{
      console.log("useEffect...")
    },[mensaje])
  
  
  
  return (  
  <>
    <h2>{mensaje}</h2>
    <button onClick={() => setMensaje("Mensaje Modificado")}>Cambiar Mensaje</button>
    <p>{contador}</p>
    <button onClick={() => setContador(contador + 1)}>Sumar</button>
    <ItemListContainer propiedadEjemplo="Esta es una propiedad de ejemplo" />
  </> 
        
  )
}

export default App


  
