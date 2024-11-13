const pool = require('../config/db');

exports.getAllTasks = async (userId) => {
    try {
        const [rows] = await pool.query("SELECT * FROM tasks WHERE userId = ?", [userId]);
        console.log(rows)
        return rows;
    } catch (error) {
        throw new Error("Error retrieving tasks: " + error.message);
    }
};

exports.addTask = async (userId, task) => {
    const { title, taskId, disc, dueDate, status, category ,prirority} = task;
    try {
        const result = await pool.query(
            "INSERT INTO tasks (title, taskId, disc, dueDate, status, category, userId,prirority) VALUES (?, ?, ?, ?,?, ?, ?, ?)",
            [title, taskId, disc, dueDate, status, category, userId,prirority]
        );
        console.log(result)
        return result;
    } catch (error) {
        console.log(error)
        throw new Error("Error adding task: " + error.message);
    }
};

exports.updateTask = async (taskId, userId, task) => {
    const { title,disc, dueDate, status, category ,prirority} = task; 
      console.log(task)
      try {
        const result = await pool.query(
            "UPDATE tasks SET title = ?, disc = ?, status = ?, category = ?, dueDate = ? ,prirority=? WHERE userId = ? AND taskId = ?",
            [title, disc, status, category, dueDate,prirority, userId, taskId]
        );
        return result;
    } catch (error) {
        throw new Error("Error updating task: " + error.message);
    }
};

exports.deleteTask = async (taskId, userId) => {
    try {
        const result = await pool.query("DELETE FROM tasks WHERE userId = ? AND taskId = ?", [userId, taskId]);
        return result;
    } catch (error) {
        throw new Error("Error deleting task: " + error.message);
    }
};
