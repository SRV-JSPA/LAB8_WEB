import { useContext } from "react"
import { CalcuContext } from "../Context/CalcuContext"


const Pantalla = () => {
  const {calcu} = useContext(CalcuContext)
  const numeroValido = calcu.numero.toString().slice(0, 9)
  return (
    <div className="pantalla" >{calcu.numero ? numeroValido : calcu.resultado }</div>
  )
}

export default Pantalla