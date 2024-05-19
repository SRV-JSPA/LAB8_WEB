import React from 'react'


function estilo (valor){
  const clase = {
    '=': 'igual',
    '+': 'operacion',
    '-': 'operacion',
    '*': 'operacion',
    '/': 'operacion',
    'x': 'operacion'
  }
  return clase[valor]
}

const Boton = ({valor}) => {
  return (
    <button className={`${estilo(valor)} boton`} >{valor}</button>
  )
}

export default Boton