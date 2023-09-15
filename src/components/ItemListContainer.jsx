import React from 'react'
import  ItemCount from './ItemCount'

const ItemListContainer = ({greeting}) => {
  
  let productos = [
    {id: 1, nombre: "Servidor 1" ,descripcion: "Descripcion del servidor 1", precio: 1000},
    {id: 2, nombre: "Servidor 2" ,descripcion: "Descripcion del servidor 2", precio: 1500},
    {id: 3, nombre: "Servidor 3" ,descripcion: "Descripcion del servidor 3", precio: 2500},
  ]
  
  const mostrarProductos = new Promise((resolve, reject) => {
    if(productos.length > 0){
      setTimeout(() => {
        resolve(productos)
      }, 5000 )
    
    }else {
      reject("No hay productos para mostrar")
    }
  })

  mostrarProductos
  .then((resultado)=>{
    console.log(resultado)
  })
  .catch((error) => {
    console.log(error)
  })

    return (
      <>
        {
            productos.map((p)=>{
              return(
                <div>
                  <h1>Nombre:{p.nombre}</h1>
                  <h3>Descripcion:{p.descripcion}</h3>
                  <p>Precio:{p.precio}</p>
                </div>
              )
          })
      }

    </>
  )
}

export default ItemListContainer