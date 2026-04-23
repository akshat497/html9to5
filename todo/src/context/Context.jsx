import { createContext, useState } from "react"

export const userContext = createContext()


export const Context = (props) => {
    const [name, setName] = useState("akshat")

  return (
    <userContext.Provider value={{name, setName}}>
    {props.children}
    </userContext.Provider>
  )
}

