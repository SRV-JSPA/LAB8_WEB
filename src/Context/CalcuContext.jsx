import { createContext, useState } from "react"

export const CalcuContext = createContext()
const CalcuProvider = ({children}) => {
    const [calcu, setCalcu] = useState({
        signo: '',
        numero: 0,
        resultado: 0
    })

    const provider = {
        calcu, setCalcu
    }

  return (
    <CalcuContext.Provider value={provider}>
        {children}
    </CalcuContext.Provider>
  )
}

export default CalcuProvider