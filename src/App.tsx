import React,{useState} from 'react';
import Todos from './components/Todos';
import './index.css';
import AddTodo from './components/AddTodo';
import { TodoType } from './types';

const App = () => {
  const todosData =[
    {
      id:"1",
      title:"todo title 1",
    },
     {
      id:"2",
      title:"todo title 2",
    },
     {
      id:"3",
      title:"todo title 3",
    },
     {
      id:"4",
      title:"todo title 4",
    },
     {
      id:"5",
      title:"todo title 5",
    },
     {
      id:"6",
      title:"todo title 6",
    },
  ];
  const [todos , setTodos] = useState(todosData);
  
  const handleDeleteTodo = (id:string) =>{
         const filterTodos = todos.filter(todo => todo.id !== id);
   setTodos(filterTodos)
  };
  //const handleAddNewTodo =(newTodo: TodoType);
  const handleAddNewTodo = (newTodo: TodoType) => {
  setTodos((prevTodos) => [...prevTodos, newTodo]);
};
  return (
    <div>
      {/* <h1 className="app"> Todo App </h1>  */}
      <AddTodo  handleAddNewTodo={handleAddNewTodo} />
      <Todos todos={todos} handleDeleteTodo={handleDeleteTodo} />
    </div>
  )
}

export default App;