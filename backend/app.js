const express=require("express")
const cors=require("cors")
require('dotenv').config()
const bodyparse=require("body-parser")
const taskRoute=require("./routes/tasks")
const userRoute=require("./routes/users")

const app=express();

app.use(cors())
app.use(bodyparse.urlencoded({extended:true}))
app.use(express.json())


app.use('/tasks',taskRoute)
app.use('/users',userRoute)

app.listen(process.env.PORT)