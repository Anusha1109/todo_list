import React ,{useState}  from 'react';
export default function Todoform(props)
{
const [input,setInput]=useState("");
const handleChange=e=>{
    setInput(e.target.value)
}
const handleSubmit=(e)=>{
    e.preventDefault();
    props.addTask({
    id:Math.floor(Math.random()*1000000),
    text:input,
    iscomplete:false
    })
setInput('')
}
return (
<form className="todo-form">
    <input type="text" placeholder="Add todo" onChange={handleChange} className="Todo-input" value={input} name="text"/>
    <button type="submit" onClick={handleSubmit} className="todo-btn">Add ToDo</button>

    </form>
    );

}