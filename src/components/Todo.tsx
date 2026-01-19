import React from 'react';
type TodoType= {
     todo: {
    id: string;
    title: string;
};
  handleDeleteTodo:Function;
};
const Todo = (props:TodoType) => {
    const deleteTodo =(id:string) =>{
         props.handleDeleteTodo (id);
    };
  return (
    <article className="todo">
        <h3>{props.todo.id}</h3>
        <h3>{props.todo.title}</h3>
        <button  className="btn-btn" onClick=
        {()=>{deleteTodo(props.todo.id)}}> Delete Todo </button>

    </article>
  )
}

export default Todo;