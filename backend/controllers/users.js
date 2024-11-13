const users = require('../models/users');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require('dotenv').config()

exports.login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({message:"Email and password are required"});
    }

    try {
        const user = await users.getUserByEmail(email);

        if (!user || user.length === 0) {
            return res.status(400).json({message:"User not found"});
        }

        const isMatch = await bcrypt.compare(password, user[0].password);

        if (!isMatch) {
            return res.status(400).json({message:"Password is incorrect"});
        }

        const token = jwt.sign(
            { userId: user[0].userId },
            process.env.DB_KEY, 
            { expiresIn: "1h" }
        );
        return res.json({ token});

    } catch (err) {
        console.error(err); 
        return res.status(500).json({message:"Internal server error"}); 
    }
};


exports.signup = async (req, res) => {
    const { userId,email, password, username } = req.body.user;

    try {
        console.log(userId)
        const existingUser = await users.getUserByEmail(email);

        console.log(existingUser)
        if (existingUser.length > 0) {
            return res.status(400).json({ message: "Username already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await users.addUser(userId,email,hashedPassword,username);

        return res.status(201).json({message:result});
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};
