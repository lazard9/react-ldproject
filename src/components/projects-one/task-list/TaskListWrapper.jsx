import { useEffect, useState } from "react";

import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

/**
 * TaskListHolder is a React component that manages a list of tasks.
 * It initializes the task list from localStorage and updates localStorage
 * whenever the tasks change. The component provides functions to add, toggle,
 * and delete tasks. It renders a TaskForm for adding tasks and a TaskList
 * for displaying and managing existing tasks.
 */

const TaskListHolder = () => {
    // const [tasks, setTasks] = useState([]);
    const [tasks, setTasks] = useState(() => {
        const localValue = localStorage.getItem("ITEMS");
        if (localValue == null) return [];

        return JSON.parse(localValue);
    });

    useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(tasks));
    }, [tasks]);

    function addTask(title) {
        const taskExists = tasks.some((task) => task.title === title);
    
        if (taskExists) {
            return { success: false, message: "Task already exists!" };
        }
    
        const newTask = { id: crypto.randomUUID(), title, completed: false };
        setTasks((currentTasks) => [...currentTasks, newTask]);
    
        return { success: true, message: "Task added successfully!" };
    }    

    function toggleTask(id, completed) {
        setTasks((currentTasks) => {
            return currentTasks.map((task) => {
                if (task.id === id) {
                    return { ...task, completed };
                }

                return task;
            });
        });
    }

    function deleteTask(id) {
        setTasks((currentTasks) => {
            return currentTasks.filter((task) => task.id !== id);
        });
    }

    return (
        <>
            <TaskForm addTask={addTask} />
            <TaskList
                tasks={tasks}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
            />
        </>
    );
};

export default TaskListHolder;
