import React, { useEffect, useState } from 'react';
import './App.css';
//importing components
import Form from './components/Form';
import TodoList from './components/TodoList';

const App = () => {
    const [inputText,setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("All");
    const [filteredTodos, setFilteredTodos] = useState([]);
    const filterHandler = () => {
        switch (status) {
            case 'Active':
                setFilteredTodos(todos.filter(todo => todo.completed === false));
                break;
            case 'Completed':
                setFilteredTodos(todos.filter(todo => todo.completed === true));
                break;
            default :
                setFilteredTodos(todos);
                break;
            }
    }
    useEffect (() => {
        filterHandler();
    }, [todos, status]);
    return (
    <div className="App">
    <div className="container">
        <div className="row">
        <div className="col-md-12">
        <div className="card card-white">
        <h1>To-do-List</h1>
        <Form 
        inputText={inputText} 
        setInputText={setInputText} 
        todos={todos} 
        setTodos={setTodos}
        setStatus={setStatus}
        status={status}
        setFilteredTodos={setFilteredTodos}
        filteredTodos={filteredTodos} />
        <TodoList todos={todos} 
        setTodos={setTodos}
        setFilteredTodos={setFilteredTodos}
        filteredTodos={filteredTodos} />
        </div>
        </div>
        </div>
        </div>
    </div>
    );
}

export default App;