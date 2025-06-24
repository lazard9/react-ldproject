import { useEffect, useState } from "react";

import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

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
