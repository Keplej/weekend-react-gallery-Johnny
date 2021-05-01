import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx';
// import GalleryItem from '../GalleryItem/GalleryItem.jsx';

function App() {

  const [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    console.log('testing');
    getGallery();
  }, []);

  //Just making sure that axios is install with putting the term axios in
  const getGallery = () => {
    axios.get('/gallery')
    .then(response => {
      console.log('Getting image from gallery!', response);
      //Need to add in a source 
      setGalleryList(response.data)
    })
    .catch(error => {
      console.log('Error on getting image', error);
    })
  }

  //Adding in a PUT function for the Likes

  const likeCount = (id) => {
    axios.put(`/gallery/like/${id}`)
    .then(response => {
      console.log('Testing Count!', response.data);
      getGallery();
    })
    .catch(error => {
      console.log('ERROR IN THE PUT', error);
    })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryList galleryList = {galleryList} 
        likeCount = {likeCount}
        />
      </div>
    );
}

export default App;


//USE THESE 

// - `App` - represents the overall application or site 
// - `GalleryList` - represents the gallery of images. By componentizing, we could reuse this component in different applications
// - `GalleryItem` - represents a single image in the gallery with the ability to click the image to toggle between image and description as well as the ability to like an image.
