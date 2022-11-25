import { useState } from "react"
import './TodoForm.css'

export default function TodoForm({ addTodo }) {

    const [value, setValue] = useState("")

    function submitHandler(event) {
        event.preventDefault()
        if (!value) return
        addTodo(value)
        setValue("")
    }

    return (
        <div className="AddTodo">
            <form onSubmit={submitHandler}>
                <p>Hi! What's your plan for today?</p>
                <input type="text" autoComplete="off" name="addTodoInput" placeholder="Press enter to add a task..." value={value} onChange={event => setValue(event.target.value)} />
                {/* <button type='submit'>Add</button> */}
            </form>
        </div>
    )
}