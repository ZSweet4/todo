import React, { useState } from 'react';
import './App.css';

function App() {

  const [todo, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  function addTodo(){
    const items = {
      id: Math.floor(Math.random() * 1000),
      name: newTodo
    };

    setTodo(oldTodo => [...oldTodo, items]);
    setNewTodo('');
  }

  function deleteTodo(id){
    const deletedArray = todo.filter(item => item.id !== id);
    setTodo(deletedArray);
  }

  return (
    <div className="App">
      <div className='centered'>
        <label htmlFor='todoInput' id='todoLabel'>Enter your todo</label>
        <input 
        type='text' 
        value={newTodo} 
        id='todoInput' 
        placeholder='I have to code' 
        onChange={e => setNewTodo(e.target.value)} />
        <button onClick={addTodo}>Submit</button>
        <ul>
          {todo.map(item => {
            return <li className='todoList' key={item.id}>{item.name} <button className='deleteBTN' onClick={() => deleteTodo(item.id)}>Delete</button></li>
          })}
        </ul>
      </div>
    </div>
  ) 
}

export default App;
