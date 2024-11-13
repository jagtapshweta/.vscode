const pool = require("../config/db");

exports.getUserByEmail = async (email) => {
    try {
        const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
        return rows;
    } catch (error) {
        console.error("Error getting user by email:", error);
        throw error; 
    }
};

exports.addUser = async (userId,email,password,username) => {
    try {
        const result = await pool.query("INSERT INTO users (userId,email, password, username) VALUES (?,?, ?, ?)", [userId,email, password, username]);
        return result;
    } catch (error) {
        console.error("Error adding user:", error);
        throw error; 
    }
};
