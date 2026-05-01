import { createContext, useState } from "react"

export const userContext = createContext()


export const Context = (props) => {
    const [name, setName] = useState("akshat")
    const[tasks,settasks] = useState([])
    function addToLocalStorage(key,obj){
      let data=JSON.stringify(obj)
      localStorage.setItem(key,data)
    }
    function getFromLocalStorage(key){
      let data = localStorage.getItem(key)
      return JSON.parse(data)

    }
  return (
    <userContext.Provider value={{name, setName, tasks, settasks,addToLocalStorage,getFromLocalStorage}}>
    {props.children}
    </userContext.Provider>
  )
}

