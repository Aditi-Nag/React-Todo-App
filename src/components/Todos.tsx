import React from 'react'
import Todo from './Todo';
import { TodoType } from '../types';

type TodosType= {
  todos:{
    id: string;
    title: string;
}[]
handleDeleteTodo:Function;
   
};
const Todos = (props:TodosType) => {
    
  return (
    <section className="todos">
      {props.todos.map(todo => <Todo key={todo.id} todo={todo}  handleDeleteTodo={props.handleDeleteTodo}/>)}
    </section>
  )
};

export default Todos;