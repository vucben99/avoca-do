import './TodosWrapper.css'
import TodoForm from './TodoForm'
import Todo from './Todo'
import { useState } from 'react'


export default function TodosWrapper() {

    const [todos, setTodos] = useState([])

    function addTodo(newTodo) {
        setTodos([{ 'text': newTodo, 'done': false }, ...todos])
    }

    const deleteTask = (index) => {
        const tempTodos = [...todos]
        tempTodos.splice(index, 1)
        setTodos(tempTodos)
    }

    const editTask = (index, inputVal) => {
        todos[index].text = inputVal
        setTodos([...todos])
    }

    return (
        <>
            <div className="todos__wrapper">
                <TodoForm addTodo={addTodo} />
                {todos.map((todo, index) => (
                    <Todo
                        todoText={todo.text}
                        todoDone={todo.done}
                        deleteTask={deleteTask}
                        editTask={editTask}
                        key={index}
                        index={index}
                    />
                ))
                }
            </div>
        </>
    )
}