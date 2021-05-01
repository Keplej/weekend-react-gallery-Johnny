import axios from 'axios';
import React, { useState } from 'react';
import './App.css';
// import GallaryImage from '../GallaryItem/GallaryImage';

function App() {

  const [gallaryList, setGallaryList] = useState([]);

  //Just making sure that axios is install with putting the term axios in
  const getGallery = () => {
    axios.get('/gallery')
    .then(response => {
      console.log('Getting image from gallary!', response);
      //Need to add in a source 
      setGallaryList(response.data)
    })
    .catch(error => {
      console.log('Error on getting image', error);
    })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        {/* <GalleryItem gallaryList ={gallaryList}/> */}
      </div>
    );
}

export default App;


//USE THESE 

// - `App` - represents the overall application or site 
// - `GalleryList` - represents the gallery of images. By componentizing, we could reuse this component in different applications
// - `GalleryItem` - represents a single image in the gallery with the ability to click the image to toggle between image and description as well as the ability to like an image.
