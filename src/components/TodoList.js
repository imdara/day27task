import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filteredTodos, setFilteredTodos }) => {
    return (
    <ul className="todo-list">   
        { 
            filteredTodos.map((todo) => {return <Todo 
            todos={todos} 
            setTodos={setTodos} 
            todo={todo}
            key={todo.id}
            text={todo.text} />})
        }
    </ul>
    );
}

export default TodoList;