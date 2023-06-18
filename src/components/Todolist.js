import React, { useState } from 'react';

import Todoform from './Todoform'
import Todo from './Todo';
export default function Todolist()
{
    const [todos,setTodos]=useState([]);
    const addTask=task=> {
        if(!task.text) {
            return;
        }
        const newTodos = [task, ...todos];
        setTodos(newTodos);
    }
    //remove task
    const removeTask=id=>{
        let updatedTasks=[...todos].filter(task=>task.id!==id)
        setTodos(updatedTasks)
    }
    //task completed
    const completeTask=id=>{
        let updatedTasks=todos.map(todo=>{
            if(todo.id===id)
            {
                todo.iscomplete=true;
            }return todo;

        })
        setTodos(updatedTasks)
    }
    return <div>
    <Todoform addTask={addTask}></Todoform>
    <Todo todos={todos} completeTask={completeTask} removeTask={removeTask}></Todo>
    </div>
}