import Axios from 'axios';
import React from 'react';
import './App.css';

function App() {
  
  //Just making sure that axios is install with putting the term axios in
  const getGallery = () => {
    Axios({

    })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
        <img src="images/floppa.jpeg"/>
        <img src="images/watame.jpeg"/>
        <img src="images/yotsuba.png"/>
      </div>
    );
}

export default App;
