import TaskItem from "./TaskItem";
import PropTypes from 'prop-types';
import "./TaskList.scss";

/**
 * @description
 * TaskList is a React component that renders a list of TaskItem components.
 * It takes three props: tasks, toggleTask, and deleteTask.
 * Tasks is an array of tasks, each task being an object with at least an
 * id, title, and completed property.
 * toggleTask and deleteTask are functions that toggle the completion status
 * and delete a task, respectively.
 * The component renders the number of remaining tasks, if any.
 * @param {Object[]} tasks - The list of tasks to render.
 * @param {Function} toggleTask - Function to toggle the completion status of a task.
 * @param {Function} deleteTask - Function to delete a task.
 * @returns {JSX.Element} - The rendered list of tasks.
 */
function TaskList({ tasks, toggleTask, deleteTask }) {
    function remainingTasks(tasks) {
        const remaining = tasks.filter((task) => !task.completed).length;
        return remaining;
    }

    const remainingCount = remainingTasks(tasks);

    return (
        <ul className="task-list">
            {tasks.length === 0 && "No tasks to be viewed!"}
            {tasks.map((task) => {
                return (
                    <TaskItem
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        completed={task.completed}
                        // {...task}
                        toggleTask={toggleTask}
                        deleteTask={deleteTask}
                    />
                );
            })}
            {tasks.length != 0 && <div>{remainingCount} tasks left to do.</div>}
        </ul>
    );
}

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired,
    toggleTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
};

export default TaskList;
