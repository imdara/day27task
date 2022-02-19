// import React, { useState } from 'react';

const Form = ({ inputText, setInputText, todos, setTodos, status, setStatus, filteredTodos, setFilteredTodos}) => {
    //Javascript function to create a todo list object
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([ 
            ...todos, 
            { id: Math.random()*10, text: inputText, completed: false } 
        ]);
        setInputText(""); 
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    };
    return (
        <div className="card-body">
        <form>
            <input
            value={inputText} 
            onChange={inputTextHandler} 
            type="text" 
            className="form-control add-task" 
            placeholder="New Task..." />
            <button onClick={submitTodoHandler} className="btn btn-primary">+</button>        
        </form>
        <ul className="nav nav-pills todo-nav">
            <li role="presentation" className="nav-item all-task active"><button onClick={statusHandler} className="nav-link" value="All">All</button></li>
            <li role="presentation" className="nav-item active-task"><button onClick={statusHandler} className="nav-link" value="Active">Active</button></li>
            <li role="presentation" className="nav-item completed-task"><button onClick={statusHandler} className="nav-link" value="Completed">Completed</button></li>
        </ul>
        </div>
    );
}

export default Form;