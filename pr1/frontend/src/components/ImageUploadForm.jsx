import React, { useState } from 'react';
import axios from 'axios';

function ImageUploadForm({addPhoto}) {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    formData.append('title', title);
    formData.append('description', description);

    try {
      const res=await axios.post('http://localhost:5000/upload', formData);

      alert('Image uploaded successfully');
      console.log(res.data.image_path)

      formData.append('image_path',res.data.image_path)
      addPhoto(formData)

    } catch (error) {
      console.error('Error uploading the image:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="image-upload-form">
      <input type="file" onChange={handleImageChange} required />
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Upload</button>
    </form>
  );
}

export default ImageUploadForm;
