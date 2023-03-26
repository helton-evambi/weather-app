import { createContext, useState } from "react";

export const TempUnitContext = createContext()

export default function TempUnitProvider({children}) {
  const [unit, setUnity] = useState('temp_c')
  return(
    <TempUnitContext.Provider value= {{unit, setUnity}}>
      {children}
    </TempUnitContext.Provider>
  )
}
