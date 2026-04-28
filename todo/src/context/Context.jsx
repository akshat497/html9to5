import { createContext, useState } from "react"

export const userContext = createContext()


export const Context = (props) => {
    const [name, setName] = useState("akshat")
    const[tasks,settasks] = useState([])

  return (
    <userContext.Provider value={{name, setName, tasks, settasks}}>
    {props.children}
    </userContext.Provider>
  )
}

