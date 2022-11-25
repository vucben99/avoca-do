import { useState } from 'react'
import './Todo.css'

export default function Todo({ todoText, isDone, deleteTask, editTask, toggleTask, id }) {

    // const [taskDone, setTaskDone] = useState(isDone)
    const [editingTask, setEditingTask] = useState(false)

    const conditionalStyle = (
        //taskDone ?
        isDone ?
            {
                textDecoration: "line-through 2px",
            } :
            {
                textDecoration: "none"
            }
    )

    const taskDoneHandler = (e) => {
        // setTaskDone(e.target.checked)
        toggleTask(id, !isDone)
    }

    const inputValHandler = (e) => {
        if (e.key === "Enter" && e.target.value.length) {
            const inputVal = e.target.value
            editTask(id, inputVal)
            setEditingTask(!editingTask)
        } else return
    }

    return (
        <div className="todo">
            <input type="checkbox" checked={isDone} onChange={taskDoneHandler} id="task-edit-input" />

            <p style={conditionalStyle}>
                {editingTask ?
                    <input type='text' defaultValue={todoText} onKeyPress={inputValHandler} /> :
                    todoText
                } {/* magamnak: miért a p-ben van az input? */}
            </p>
            <div className="todo__Btns">
                {editingTask ? (
                    <button className="todo__saveBtn" onClick={() => {
                        setEditingTask(false)
                    }}>
                        💾
                    </button>) : (
                    <button className="todo__editBtn" onClick={
                        (e) => {
                            setEditingTask(true)

                        }
                    }>
                        🖊
                    </button>
                )
                }
                <button className="todo__delBtn" onClick={() => deleteTask(id)}>✖</button>
            </div>
        </div>
    )
}