// Import Mongoose and your User model
import mongoose from 'mongoose';
import User from './User.js'; // Adjust the path to where your User model is defined
import 'dotenv/config';

// Connect to MongoDB
const MONGO_URL = process.env.MONGO_URL
mongoose.connect("mongodb+srv://jagtapshweta26:tJy5x6QpWUPt7lEX@Serenity.mongodb.net/serenity?retryWrites=true&w=majority"
, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');

        // Create a new user instance
        const newUser = new User({
            userType: "Student",
            userFullName: "John Doe",
            admissionId: "A123456",
            age: 20,
            gender: "Male",
            dob: "2002-01-01",
            address: "123 Main St",
            mobileNumber: 1234567890,
            email: "johndoe@example.com",
            password: "securepassword123", // Remember to hash passwords in real applications
            points: 100,
            isAdmin: false,
            activeTransactions: [], // Initially, no active transactions
            prevTransactions: []    // Initially, no previous transactions
        });

        // Save the user to the database
        newUser.save()
            .then(user => {
                console.log('User created:', user);
                mongoose.connection.close(); // Close the connection after saving
            })
            .catch(err => {
                console.error('Error creating user:', err);
                mongoose.connection.close();
            });
    })
    .catch(err => console.error('Failed to connect to MongoDB:', err));
