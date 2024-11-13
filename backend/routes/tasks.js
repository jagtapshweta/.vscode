const express=require("express")
const route=express.Router();
const taskController=require("../controllers/tasks")
const auth=require('../middlewares/auth')

route.post('/',auth,taskController.addTask)
route.delete('/:id',auth,taskController.deleteTask)
route.put('/:id',auth,taskController.updateTask)
route.get('/',auth,taskController.getTasks)

module.exports=route;