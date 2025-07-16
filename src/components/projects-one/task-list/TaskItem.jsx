import PropTypes from 'prop-types';
import "./TaskItem.scss";

/**
 * @description
 * TaskItem is a React component that renders a single task with a checkbox and
 * a delete button.
 * @param {Object} props - The component props.
 * @param {boolean} props.completed - Whether the task is completed or not.
 * @param {number} props.id - The id of the task.
 * @param {string} props.title - The title of the task.
 * @param {Function} props.toggleTask - Function to toggle the completion status
 * of a task.
 * @param {Function} props.deleteTask - Function to delete a task.
 * @returns {JSX.Element} - The rendered list item.
 */
function TaskItem({ completed, id, title, toggleTask, deleteTask }) {
    return (
        <li className="task-list__item">
            <label>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={(e) => toggleTask(id, e.target.checked)}
                />
                {title}
            </label>
            <button onClick={() => deleteTask(id)} className="task-list__delete">
                Delete
            </button>
        </li>
    );
}

TaskItem.propTypes = {
    completed: PropTypes.bool,
    id: PropTypes.number,
    title: PropTypes.string,
    toggleTask: PropTypes.func,
    deleteTask: PropTypes.func,
};

export default TaskItem;
