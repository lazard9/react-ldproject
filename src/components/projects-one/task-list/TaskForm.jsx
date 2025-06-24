import { useState } from "react";
import "./TaskForm.scss";

function TaskForm({ addTask }) {
    const [newTask, setNewTask] = useState("");
    const [taskExists, setTaskExists] = useState({
        success: undefined,
        message: "",
    });
    const [showStartTyping, setShowStartTyping] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        if (newTask === "") {
            setShowStartTyping(true);
            setTimeout(() => {
                setShowStartTyping(false);
            }, 4000);
            return () => clearTimeout(timer);
        }

        const exists = addTask(capitalizeFirstLetter(newTask));

        if (!exists.success) {
            setTaskExists({ success: exists.success, message: exists.message });
            setTimeout(() => {
                setTaskExists({ success: undefined, message: "" });
            }, 4000);
        } else {
            setNewTask("");
            setTaskExists({ success: exists.success, message: exists.message });
            setTimeout(() => {
                setTaskExists({ success: undefined, message: "" });
            }, 4000);
        }
    }

    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <div className="task-form__row">
                {showStartTyping && newTask === "" && (
                    <span className="task-form__start-typing">
                        Start typing...
                    </span>
                )}
                <label htmlFor="item">Create new task:</label>
                <input
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    type="text"
                    id="item"
                />
            </div>
            <button className="task-form__submit">Set tastk</button>
            {taskExists.success === false && (
                <span className="task-form__duplicate-notification">
                    {taskExists.message}
                </span>
            )}
            {taskExists.success === true && (
                <span className="task-form__success-notification">
                    {taskExists.message}
                </span>
            )}
        </form>
    );
}

export default TaskForm;
