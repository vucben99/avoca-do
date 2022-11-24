import { useState } from 'react'
import './Todo.css'

export default function Todo({ todoText, todoDone, deleteTask, editTask, index }) {

    const [taskDone, setTaskDone] = useState(todoDone)
    const [editingTask, setEditingTask] = useState(false)

    const conditionalStyle = (
        taskDone ?
            {
                textDecoration: "line-through 2px",
            } :
            {
                textDecoration: "none"
            }
    )

    const taskDoneHandler = (e) => {
        setTaskDone(e.target.checked)
    }

    const inputValHandler = (e) => {
        if (e.key === "Enter" && e.target.value.length) {
            const inputVal = e.target.value
            editTask(index, inputVal)
            setEditingTask(!editingTask)
        } else return
    }

    return (
        <div className="todo">
            <input type="checkbox" defaultChecked={taskDone} onChange={taskDoneHandler} id="task-edit-input" />

            <p style={conditionalStyle}>
                {editingTask ?
                    <input type='text' defaultValue={todoText} onKeyPress={inputValHandler} /> :
                    todoText
                } {/* miért a p-ben van az input? */}
            </p>
            <div className="todo__Btns">
                {editingTask ? (
                    <button className="todo__saveBtn" onClick={() => setEditingTask(false)}>Save</button>) : (
                    <button className="todo__editBtn" onClick={
                        (e) => {
                            setEditingTask(true)

                        }
                    }>
                        Edit
                    </button>
                )
                }
                <button className="todo__delBtn" onClick={() => deleteTask(index)}>x</button>
            </div>
        </div>
    )
}