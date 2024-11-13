const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,  
    database: process.env.DB
});

const insertPhoto = (title, description, image_path) => {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO photos (title, description, image_path) VALUES (?, ?, ?)';
        pool.query(query, [title, description, image_path], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

const getAllPhotos = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM photos';
        pool.query(query, (err, results) => {
            if (err) reject(err);
            resolve(results);
        });
    });
};

module.exports = { insertPhoto, getAllPhotos };


// CREATE DATABASE photo_gallery;

// USE photo_gallery;

// CREATE TABLE photos(
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     title VARCHAR(255),
//     description TEXT,
//     image_path VARCHAR(255)
// );
