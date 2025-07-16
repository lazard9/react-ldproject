import { useState } from "react";
import PropTypes from 'prop-types';
import "./TaskForm.scss";

/**
 * TaskForm is a React component that provides an interactive form for
 * creating new tasks. The component takes a single prop, `addTask`, which
 * is a function that adds a new task to the list.
 *
 * The component maintains state for the currently entered task, whether
 * the task already exists in the list, and whether the start-typing message
 * should be displayed.
 *
 * The component renders a form with an input field and a submit button.
 * When the form is submitted, the component calls the `addTask` function
 * with the current task, and displays a success or error message
 * accordingly.
 */
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
            return;
        }

        const exists = addTask(capitalizeFirstLetter(newTask));

        if (!exists.success) {
            setTaskExists({ success: exists.success, message: exists.message });
        } else {
            setNewTask("");
            setTaskExists({ success: exists.success, message: exists.message });
        }

        setTimeout(() => {
            setTaskExists({ success: undefined, message: "" });
        }, 4000);
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

TaskForm.propTypes = {
    addTask: PropTypes.func,
};

export default TaskForm;
