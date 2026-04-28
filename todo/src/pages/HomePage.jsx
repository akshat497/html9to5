import React, { useContext, useEffect, useReducer } from "react";
import { userContext } from "../context/Context";

export default function HomePage({ user }) {
  // function reducer(state,action){
  //   switch(action.type){
  //     case "INCREMENT":
  //       return {count: state.count + 1}
  //     case "DECREMENT":
  //       return {count: state.count - 1}
  //     default:
  //       return state
  //   }
  // }
  async function getUsers(){
   try{
     let res = await fetch("htt://jsonplaceholder.typicode.com/usrs");
    let data = await res.json();
    console.log(data);
   }
   catch(err){
    console.log("Error fetching users:", err);
   }
  }

  useEffect(() => {
    getUsers();
  }, []);
  const { tasks, settasks } = useContext(userContext);
  const [userinput, setUserInput] = React.useState("");
  const [isEditing, setIsEditing] = React.useState({
    state: false,
    index: null,
  });

  function addTask() {

    let task={
      id:tasks.length + 1,
      task:userinput,
      isCompleted:false
    }
    settasks([...tasks, task]);
    setUserInput("");
  }
  console.log(tasks);

  function deleteTodo(index) {
    settasks(tasks.filter((task, i) => i !== index));
  }

  function completeTodo(id) {
    let updatedTasks = tasks.map((task) => {

      if (task.id === id) {
        task.isCompleted = !task.isCompleted;
      }
      return task;
    })
    settasks([...updatedTasks]);

  }
  useEffect(() => {
    tasks.map((task, i) => {
      if (i === isEditing.index) {
        setUserInput(task.task);
      }
    });
  }, [isEditing]);

  function updateTask() {
     let updated= tasks.map((task, i) => {
        console.log(isEditing.index);
        if (i === isEditing.index) {
          return {...task, task: userinput};
        }
        return task;
      })
    settasks([...updated]);
    setIsEditing({ state: false, index: null });
    setUserInput("");
  }

  //  const[state, dispatch] = useReducer(reducer,{count:0})
  return (
    <center>
      <div className="todoHolder">
        <h1>Make todo</h1>

        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            width: "100%",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <input
            type="text"
            value={userinput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          {isEditing.state ? (
            <button style={{ backgroundColor: "hotpink" }} onClick={updateTask}>
              Update
            </button>
          ) : (
            <button onClick={addTask}>Add</button>
          )}
        </div>

        {tasks.map((task, index) => {
          return (
            <div
              key={index}
              style={{
                margin: "20px",
                display: "flex",
                gap: "20px",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                padding: "20px",
                borderRadius: "10px",
                backgroundColor: "lightgray",
               
              }}
            >
              <li style={{ fontSize: "x-large" , textDecoration: task.isCompleted ? "line-through" : "none",}}>{task.task}</li>
              <div id="buttonHolder">
                <button id="delete" onClick={() => deleteTodo(index)}>
                  Delete
                </button>
                <button
                  id="edit"
                  onClick={() => {
                    setIsEditing({ state: true, index: index });
                  }}
                >
                  Edit
                </button>
                <button id="complete" onClick={() => completeTodo(task?.id)}>
                 {task.isCompleted ? "Undo" : "Complete"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

    </center>
  );
}
