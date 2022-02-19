import React from 'react';

const Todo = ({todos, setTodos, todo, text}) => {
    //Events
    const checkHandler = () => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return {
                        ...item,
                        completed : !item.completed
                    };
                }
                return item;
            })
            );
        };
    return (
        <div className="todo-item">
            <div className="checker"><span><input onClick={checkHandler} checked={`${todo.completed ? 'checked' : ''}`} type="checkbox"/></span></div>
            <span className={`todo-item ${todo.completed ? 'completed' : ''}`}>{text}</span>
            <a href="" className="float-right remove-todo-item"><i className="icon-close"></i></a> 
        </div>
    );
}

export default Todo;
