import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import { Center } from "@chakra-ui/react"
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'


const App = () => {

     return (
        <>
          <NavBar/>

          <div className="ItemStyle">
          <Center bg="tomato" h="100px" color="white">
          <ItemListContainer greeting={"LA MEJOR INDUSTRIA, EL MEJOR MERCADO"}/>
          </Center>
          
          </div>

          <div className="Prototype">
              <CircularProgress isIndeterminate color='green.300' />
          </div>



        <div className="warning">
          <Alert status='warning'>
            <AlertIcon className="icon"/>
            <AlertTitle className="nombre">Cargando el servidor, no salga de la pantalla!</AlertTitle>
            <AlertDescription>¡Gracias por esperar!</AlertDescription>
            </Alert>  
        </div>
          
          
        </>
        
        
  )
}

export default App


  
