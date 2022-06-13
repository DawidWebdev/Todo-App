import React, {useState} from 'react'

export const TodoForm = ({addTodo, addTodoLeft}) => {
    const[input, setInput] = useState('');

    const inputSubmit = e =>{
        e.preventDefault();
        if(input.length > 0)
        {
            addTodo(input);
            setInput('');
            addTodoLeft(1);
        }
    }

    const inputChange = e =>{
        setInput(e.target.value);
    }

    return (
        <form onSubmit={inputSubmit} className='todoform'>
            <div className="circleform"></div>
            <input type="text" placeholder='Create a new todo...' onChange={inputChange} value={input} className='todoform-input'/>
        </form>
    )
}