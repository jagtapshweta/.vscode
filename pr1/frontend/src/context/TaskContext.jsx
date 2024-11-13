import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext();

export const ContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [filtred,setFilterd]=useState([]);

    const addTask = (task) => {
        console.log("hii")
        setTasks([...tasks, task]);
    };

    useEffect(()=>{
      setFilterd(tasks);
    },[tasks])

    const filterTask = (taskObj) => {
        const newTasks = tasks.filter((task) => {
          if (taskObj.status === null && taskObj.prirority === null) {
            return true;
          }
      
          if (taskObj.status !== null && taskObj.prirority !== null) {
            return task.status === taskObj.status && task.prirority === taskObj.prirority;
          }
      
          if (taskObj.status !== null) {
            return task.status === taskObj.status;
          }
      
          if (taskObj.prirority !== null) {
            return task.prirority === taskObj.prirority;
          }
      
          return true;
        });
      
        setFilterd(newTasks);
      };
      
    const addTasks = (tasks) => {
        setTasks(tasks);
    };

    const deleteTask = (taskId) => {
        const newTasks = tasks.filter((task) => task.taskId !== taskId);
        setTasks(newTasks);
    };

    const updateTask = (taskId, updatedTask) => {
        const newTasks = tasks.map((task) => {
            return taskId === task.taskId ? updatedTask : task;
        });
        setTasks(newTasks);
    };

    return (
        <TaskContext.Provider value={{ filtred,tasks,filterTask,addTasks, addTask, deleteTask, updateTask }}>
            {children}
        </TaskContext.Provider>
    );
};
