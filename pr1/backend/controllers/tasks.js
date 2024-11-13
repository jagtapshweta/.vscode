const tasks=require('../models/tasks')



exports.addTask = async (req, res) => {
    const {task}=req.body;
    const {userId}=req.user;
    console.log("hhoo")
    try {
        console.log(task,userId)
        const result = await tasks.addTask(userId,task);
        return res.json(result)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message });
    }
};

exports.getTasks = async (req, res) => {
    const {userId} = req.user
   
    try {
        console.log(userId)
        const task = await tasks.getAllTasks(userId);
        return res.json({task});
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

exports.updateTask = async (req, res) => {
    const { id } = req.params;
    const {newTask}=req.body
    const {userId}=req.user;

    try {
        const result= await tasks.updateTask(id,userId,newTask)
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

exports.deleteTask = async (req, res) => {
    const { id } = req.params;
    const {userId}=req.user;

    try {
        const result =await tasks.deleteTask(id,userId);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
