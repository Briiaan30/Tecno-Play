import React, { useState } from 'react'

function Saludar({nombre}) {

  const [saludo, setSaludo] = useState('bro')
  return (
    <>
      <h1>Hola {saludo}</h1>
      <button onClick={() => setSaludo(nombre)}>Tu nombre</button>
    </>
  )
}

export default Saludar
