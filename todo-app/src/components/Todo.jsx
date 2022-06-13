import React, {useState} from 'react'

export const Todo = ({todo, removeTodo, addTodoLeft}) => {
    const[isCircleActive, setCircle] = useState(false);

    const activeCircle = () =>{
        if(isCircleActive)
        {
            setCircle(false);
            addTodoLeft(1);
            todo.completed = false;
        }
        else
        {
            setCircle(true);
            addTodoLeft(-1);
            todo.completed = true;
        }
    }
  return (
    <div className="todo">
        <div className="todo-left">
            <button className={`circle${isCircleActive ? " activeCircle" : ""}`} onClick={() =>{
                activeCircle();
            }}></button>
            <div className={`task${isCircleActive ? " taskActive" : ""}`}>{todo.text}</div>
        </div>
        <button className="cross" onClick={() => {
            removeTodo(todo)
        }}></button>
    </div>
  )
}