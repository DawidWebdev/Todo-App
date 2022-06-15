import React, {useState} from 'react'

export const Todo = ({todo, removeTodo, addTodoLeft, lightMode}) => {
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
    <div className={`todo${lightMode ? " todo-light" : ""}`}>
        <div className="todo-left">
            <button className={`circle${isCircleActive ? " activeCircle" : "" && lightMode ? " todo-light" : ""}`} onClick={() =>{
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