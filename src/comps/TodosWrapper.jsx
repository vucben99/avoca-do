import './TodosWrapper.css'
import TodoForm from './TodoForm'
import Todo from './Todo'
import { useState, useEffect } from 'react'


export default function TodosWrapper() {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        const unparsedTodos = localStorage.getItem('todos')
        if (unparsedTodos === null) {
            localStorage.setItem('todos', JSON.stringify([]))
        }
        const parsedTodos = JSON.parse(unparsedTodos)
        setTodos(parsedTodos)
    },[])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    },[todos])


    function addTodo(newTodo) {
        const updatedTodos = [{ 'text': newTodo, 'isDone': false, 'id': Math.random() }, ...todos]
        setTodos(updatedTodos)
    }

    const deleteTask = (id) => {
        const updatedTodos = todos.filter((t) => t.id !== id)
        setTodos(updatedTodos)
    }

    const editTask = (id, inputVal) => {
        const updatedTodos = todos.map((todo) => todo.id !== id ? todo : { ...todo, text: inputVal })
        setTodos(updatedTodos)
    }

    const toggleTask = (id, bool) => {
        const updatedTodos = todos.map((todo) => todo.id !== id ? todo : { ...todo, isDone: bool })
        setTodos(updatedTodos)
    }

    return (
        <>
            <div className="todos__wrapper">
                <TodoForm addTodo={addTodo} />
                {todos?.map((todo) => (
                    <Todo
                        todoText={todo.text}
                        isDone={todo.isDone}
                        deleteTask={deleteTask}
                        editTask={editTask}
                        toggleTask={toggleTask}
                        key={todo.id}
                        id={todo.id}
                    />
                ))
                }
            </div>
        </>
    )
}