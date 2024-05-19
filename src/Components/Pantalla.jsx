import { useContext } from "react"
import { CalcuContext } from "../Context/CalcuContext"
import { Textfit } from "react-textfit"


const Pantalla = () => {
  const {calcu} = useContext(CalcuContext)
  const numeroValido = calcu.numero.toString().slice(0, 9)
  return (
    <Textfit className="pantalla" >{calcu.numero ? numeroValido : calcu.resultado }</Textfit>
  )
}

export default Pantalla