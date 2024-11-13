const jwt = require("jsonwebtoken");
require('dotenv').config()

const auth = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    console.log(req.headers)
    // Check if the authorization header exists and is in the correct format
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "Unauthenticated: No or malformed token" });
    }

    const token = authHeader.split(' ')[1];
    try {
        // Verify the token using the secret key from environment variables
        const decoded = jwt.verify(token, process.env.DB_KEY);
        req.user = decoded;
        console.log(decoded)
         // Store the decoded token (user info) in the request object
        next();  // Proceed to the next middleware or route handler
    } catch (err) {
        console.log(err)
        // Handle invalid or expired token errors
        return res.status(403).json({ message: "Unauthorized: Invalid token" });
    }
};

module.exports = auth;
