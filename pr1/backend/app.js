const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const { insertPhoto, getAllPhotos } = require('./models/photoModel');

const app = express();
app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

app.post('/upload', upload.single('image'), async (req, res) => {
    const { title, description } = req.body;
    const image_path = req.file.filename;
    try {
        console.log("backend")
        await insertPhoto(title, description, image_path);
        res.status(200).send({image_path,id:1});
    } catch (error) {
        console.log(error)
        res.status(500).send('Error uploading file');
    }
});

app.get('/photos', async (req, res) => {
    try {
        const photos = await getAllPhotos();
        res.json(photos);
    } catch (error) {
        res.status(500).send('Error fetching photos');
    }
});

app.listen(5000, () => console.log('Server is running on http://localhost:5000'));
