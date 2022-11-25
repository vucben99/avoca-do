import './TodosWrapper.css'
import TodoForm from './TodoForm'
import Todo from './Todo'
import { useState } from 'react'


export default function TodosWrapper() {

    const [todos, setTodos] = useState([])

    function addTodo(newTodo) {
        setTodos([{ 'text': newTodo, 'isDone': false, 'id': Math.random() }, ...todos])
    }

    const deleteTask = (id) => {
        // const tempTodos = [...todos]
        // tempTodos.splice(index, 1)
        // setTodos(tempTodos)
        setTodos(todos.filter((t) => t.id !== id))
    }

    const editTask = (id, inputVal) => {
        // todos[index].text = inputVal
        // setTodos([...todos])
        setTodos(todos.map((todo) => todo.id !== id ? todo : { ...todo, text: inputVal }))
    }

    const toggleTask = (id, bool) => {
        setTodos(todos.map((todo) => todo.id !== id ? todo : { ...todo, isDone: bool }))
    }

    return (
        <>
            <div className="todos__wrapper">
                <TodoForm addTodo={addTodo} />
                {todos.map((todo, index) => (
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