import React,{ChangeEvent,FormEvent, useState} from 'react';

type Props ={
    handleAddNewTodo:Function
} 

const AddTodo = (props: Props) => {
    const [title , setTitle] = useState("");
    const handleChange =(event: ChangeEvent<HTMLInputElement>) =>{
           setTitle(event.target.value);
    };

    const handleSubmit =(event: FormEvent<HTMLFormElement>) =>{
      event.preventDefault();
       const newTodo = {id: new Date().getTime().toString(), title};

       props.handleAddNewTodo(newTodo);
    };
  return (
    <form   onSubmit={handleSubmit}className="todo-title" >
        <div className="form-input">
            <label htmlFor="title"> Todo Title: </label>
        <input type="text"  value={title} name="title" onChange={handleChange} required autoFocus/>
        </div>
        <div className="btn">
        <button type="submit" className='btn-style'>Add Todo</button>
        </div>
    </form>
  )
};

export default AddTodo;