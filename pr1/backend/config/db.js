const mysql=require("mysql2")
require("dotenv").config()

const pool=mysql.createPool({
    host:"localhost",
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB
}).promise();

module.exports=pool;