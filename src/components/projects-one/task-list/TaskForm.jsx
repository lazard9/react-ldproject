import { useState } from "react";
import PropTypes from "prop-types";
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
    const [task, setTask] = useState("");
    const [taskExists, setTaskExists] = useState({ success: undefined, message: "" });
    const [showStartTyping, setShowStartTyping] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        if (task === "") {
            setShowStartTyping(true);
            setTimeout(() => {
                setShowStartTyping(false);
            }, 4000);
            return;
        }

        const taskExists = addTask(capitalizeFirstLetter(task));

        if (!taskExists.success) {
            setTaskExists({ success: taskExists.success, message: taskExists.message });
        } else {
            setTask("");
            setTaskExists({ success: taskExists.success, message: taskExists.message });
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
                {showStartTyping && task === "" && (
                    <span className="task-form__start-typing">
                        Start typing...
                    </span>
                )}
                <label htmlFor="task">Create new task:</label>
                <input
                    value={task}
                    onChange={({ target: { value } }) => setTask(value)}
                    type="text"
                    id="task"
                />
            </div>
            <button className="task-form__submit">Set task</button>
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
