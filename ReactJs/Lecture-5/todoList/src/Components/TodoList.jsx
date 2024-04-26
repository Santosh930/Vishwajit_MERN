import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoList = () => {
    const [todos,setTodos]=useState([{id:uuidv4(),task:"Sample task"}]);
    const [newTodo  , setNewTodo]=useState("");
    const addNewTask=()=>{
        // console.log('We have inside function');
        setTodos([...todos,{task:newTodo,id:uuidv4()}]);
        setNewTodo('');
    }
    const updateTodoValue=(event)=>{
        // console.log(event.target.value);
        setNewTodo(event.target.value);

    }
  return (
    
      <div>
        <input type="text" value={newTodo} onChange={updateTodoValue} placeholder='add a task' /> 
        <button onClick={addNewTask}>Add Task</button>
        <br />
        <br />
        <br />
        <hr />

        <h4>Tasks Todo</h4>
        <ul>
        
            {todos.map((todo)=>(

              <li key={todo.id}>{todo.task}</li>
            ))}
        
            
        </ul>

      

      </div>
    
  )
}

export default TodoList;
