import React from 'react'

const Componente1 = ({comision, estudiante, miValor}) => {
  //console.log(estudiante)

  miValor(25)
  return (
    <>
        <h1>{comision}</h1>
        <p>{estudiante.nombre}</p>
        <p>{estudiante.apellido}</p>
  
    </>
  )

}

export default Componente1