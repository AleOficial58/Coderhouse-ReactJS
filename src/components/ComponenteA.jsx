const ComponenteA = ({curso, comision, coder, tomarValor }) => {
  //coder()


const valorRandom = Math.random() * 10

tomarValor(valorRandom)

  return (
    <>
      <h1>{curso}</h1>
      <h2>{comision}</h2>
    </>
  )
}

export default ComponenteA