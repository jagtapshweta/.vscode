import React, { useState } from 'react';
import ImageUploadForm from './components/ImageUploadForm';
import './App.css'
import PhotoGallery from './components/PhotoGallery';

function App() {
  const [photos, setPhotos] = useState([]); // Initialize as an empty array

  // Add a single photo
  const addPhoto = (photo) => {
    setPhotos((prevPhotos) => [...prevPhotos, photo]);
  };

  // Add multiple photos
  const addPhotos = (phos) => {
    setPhotos((prevPhotos) => [...prevPhotos, ...phos]);
  };

  return (
    <div className="App">
      <h1>Photo Gallery</h1>
      <ImageUploadForm addPhoto={addPhoto} />
      <PhotoGallery photos={photos} addPhotos={addPhotos} />
    </div>
  );
}

export default App;
