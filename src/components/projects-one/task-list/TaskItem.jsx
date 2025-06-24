import "./TaskItem.scss";

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

export default TaskItem;
