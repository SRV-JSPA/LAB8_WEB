import { createContext, useState } from "react"

export const CalcuContext = createContext()
const CalcuContext = ({children}) => {
    const [calcu, setCalcu] = useState({
        signo: '',
        numero: 0,
        resultado: 0
    })


  return (
    <CalcuContext.Provider>
        {children}
    </CalcuContext.Provider>
  )
}

export default CalcuContext