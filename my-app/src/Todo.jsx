import React from 'react'

export default function Todo({tasks,addTask}) {
    console.log(tasks)
  return (
<center>
        <div id='toDoBox'>
            <input id='input' type='text'/><button onClick={()=>addTask(document.getElementById('input').value)}>Add</button>
            <ul>
            {
                tasks?.map((task)=>[
                    <li>{task}</li>
                
                ])
            }

            </ul>

        </div>
</center>
  )
}
