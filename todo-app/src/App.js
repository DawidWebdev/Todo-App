import './App.css';
import sunimg from './images/icon-sun.svg';
import { TodoForm } from './components/TodoForm';
import { Todo } from './components/Todo';
import { useState } from 'react';

const App = () => {
  const[todos, setTodos] = useState([]);
  const[todoleft, setTodosLeft] = useState(0);

  const addTodo = (text) =>{
    let id = 1;
      if(todos.length > 0 )
      {
        id = todos[0].id + 1;
      }
    let todo = {
      id: id,
      text: text,
      completed: false
    };
    let newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(newTodos);
  }

  const removeTodo = (todo) =>{
    let newTodos = todos.filter((checktodo) => checktodo.id !== todo.id);
    if(todo.completed == false)
    {
      addTodoLeft(-1);
    }
    if(newTodos.length == 0)
    {
      setTodosLeft(0);
    }
    
    setTodos(newTodos);
  }

  const addTodoLeft = (int) =>{
    setTodosLeft(todoleft + int);
  }

  return (
    <main>
      <header>
        <h1 className='todo-header'>TODO</h1>
        <button className='switch-button'><img src={sunimg} className='switch-icon'></img></button>
      </header>

      <section>
        <TodoForm addTodo={addTodo} addTodoLeft={addTodoLeft}/>
        <ul>
          {todos.map((todo) => {
            return(
              <Todo todo={todo} key={todo.id} removeTodo={removeTodo} addTodoLeft={addTodoLeft}/>
            )
          })}
        </ul>
        <div className='tasks'>
          <div className='tasks-left'>{todoleft} items left</div>
          <button className='tasks-clear'>Clear Completed</button>
        </div>
      </section>
    </main>
  );
}

export default App;
