import { useState, useRef, useEffect } from 'react'
import './Todo.css'
import { AiFillDelete, AiFillEdit, AiFillSave } from 'react-icons/ai'

export default function Todo({ todoText, isDone, deleteTask, editTask, toggleTask, id }) {

    const [editingTask, setEditingTask] = useState(false)

    const inputRef = useRef(null)

    useEffect(() => {
        if (editingTask) {
            inputRef.current.focus()
        }
    }, [editingTask])

    const conditionalStyle = (
        isDone ?
            {
                textDecoration: "line-through 2px",
            } :
            {
                textDecoration: "none"
            }
    )

    const taskDoneHandler = () => {
        toggleTask(id, !isDone)
    }

    const inputValHandler = (e) => {
        if (e.key === "Enter" && e.target.value.length) {
            const inputVal = e.target.value
            editTask(id, inputVal)
            setEditingTask(!editingTask)
        }
    }

    return (
        <div className="todo">
            <input type="checkbox" checked={isDone} onChange={taskDoneHandler} id="task-edit-input" />

            {editingTask ?
                <input type='text' ref={inputRef} defaultValue={todoText} onKeyUp={inputValHandler} /> :
                <p style={conditionalStyle}>{todoText}</p>
            }

            <div className="todo__Btns">
                {editingTask ? (
                    <button className="todo__saveBtn" onClick={() => {
                        setEditingTask(false)
                    }}>
                        <AiFillSave />
                    </button>
                ) : (
                    <button className="todo__editBtn" onClick={
                        () => {
                            setEditingTask(true)
                        }
                    }>
                        <AiFillEdit />
                    </button>
                )
                }
                <button className="todo__delBtn" onClick={() => deleteTask(id)}><AiFillDelete /></button>
            </div>
        </div>
    )
}