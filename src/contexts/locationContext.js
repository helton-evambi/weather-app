import { createContext, useState } from "react";

export const LocationContext = createContext()

export default function LocationProvider({ children }) {
  const [city, setCity] = useState('Luanda')
  return (
    <LocationContext.Provider value={{ city, setCity }}>
      {children}
    </LocationContext.Provider>
  )
}
