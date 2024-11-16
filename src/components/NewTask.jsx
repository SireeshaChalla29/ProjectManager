import { useState } from "react";

export default function NewTask({ onAdd }) {
    const [enteredTask, setEnteredTask] = useState('');

    const handleChange = (event) => {
        setEnteredTask(event.target.value);
    };

    const handleClick = () => {
        if (enteredTask.trim() === '') {
            alert("Task cannot be empty!");
            return;
        }
        onAdd(enteredTask);
        setEnteredTask('');
    };

    return (
        <div className="flex items-center gap-4">
            <input
                type="text"
                className="w-64 px-2 py-1 rounded-sm bg-stone-200"
                onChange={handleChange}
                value={enteredTask}
                placeholder="Enter a new task"
            />
            <button
                className="text-stone-600 hover:text-stone-950"
                onClick={handleClick}
            >
                Add Task
            </button>
        </div>
    );
}
