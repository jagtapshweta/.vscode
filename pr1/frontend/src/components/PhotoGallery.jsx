import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PhotoGallery({photos,addPhotos}) {

  console.log(photos)
  useEffect(() => {
    axios.get('http://localhost:5000/photos')
      .then(response => addPhotos(response.data))
      .catch(error => console.error('Error fetching photos:', error));
  }, []);

  return (
    <div  className="photo-gallery">
      {photos && photos.map((photo) => (
        <div key={photo.id} className="photo-item">
          <img src={`http://localhost:5000/uploads/${photo.image_path}`} alt={photo.title} />
          <h3>{photo.title}</h3>
          <p>{photo.description}</p>
        </div>
      ))}
    </div>
  );
}

export default PhotoGallery;
