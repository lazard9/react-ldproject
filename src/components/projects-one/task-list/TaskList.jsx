import TaskItem from "./TaskItem";
import "./TaskList.scss";

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

export default TaskList;
