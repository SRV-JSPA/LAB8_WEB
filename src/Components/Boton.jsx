import React, { useContext } from 'react'
import { CalcuContext } from '../Context/CalcuContext'


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
  const {calcu, setCalcu} = useContext(CalcuContext)
  const coma = () => {
    setCalcu({
      ...calcu,
      numero: !calcu.numero.toString().includes(',') ? calcu.numero + valor : calcu.numero
    })
  }

  const resetear = () => {
    setCalcu({
          numero: 0,
          signo: '',
          resultado: 0
        })
  }

  const manejadorBoton = () => {
    const numero = valor.toString()

    let valorNumero;
    if(numero === '0' && calcu.numero === 0){
      valorNumero = '0'
    } else {
      valorNumero = Number(calcu.numero + numero)
      if(valorNumero.toString().length <= 9){
        setCalcu({
          ...calcu,
          numero: valorNumero
        })
      }
    }
  }

  const operacion = () => {
    setCalcu({
         ...calcu,
          signo: valor,
          resultado: !calcu.resultado && calcu.numero ? calcu.numero : calcu.resultado,
          numero: 0
        })
  }

  const igual = () => {
    if (calcu.resultado && calcu.numero) {
      const math = (a, b, signo) => {
        const operaciones = {
          '+': (a, b) => a + b,
          '-': (a, b) => a - b,
          'x': (a, b) => a * b,
          '/': (a, b) => a / b
        }
        const resultado = operaciones[signo](a, b);
        if (resultado < 0 || resultado > 999999999) {
          return 'Error';
        } else {
          return resultado.toString(); 
        }
      }
  
      let resultado = math(calcu.resultado, calcu.numero, calcu.signo);
  
      
      if (resultado !== 'Error' && resultado.length > 9) {
        resultado = resultado.substring(0, 9);
      }
  
      setCalcu({
        resultado: resultado,
        signo: '',
        numero: 0
      });
    }
  }
  
  const porcentaje = () => {
    setCalcu({
      numero: (calcu.numero / 100),
      resultado: (calcu.resultado / 100),
      sign: ''
    })
  }

  const menosMas = () => {
    setCalcu({
      numero: calcu.numero ? calcu.numero * -1 : 0,
      resultado: calcu.resultado ? calcu.resultado * -1 : 0,
      signo: ''
    })
  }

  const handleButton = () => {
    const resultados = {
      '.': coma,
      'C': resetear,
      '/': operacion,
      'x': operacion,
      '-': operacion,
      '+': operacion,
      '=': igual,
      '%': porcentaje,
      '-+': menosMas
    }
    
    if(resultados[valor]){
      return resultados[valor]()
    } else {
      return manejadorBoton()
    }
  }

  return (
    <button  onClick={handleButton} className={`${estilo(valor)} boton`} >{valor}</button>
  )
}

export default Boton