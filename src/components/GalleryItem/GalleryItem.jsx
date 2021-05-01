

// Trying to get images from the image folder without trying to list them all out

import { useState } from "react";

// Maybe by trying to grab the id?
function GalleryItem(props) {
    // const image = props.image;
    const [showImage, setShowImage] = useState();
    
    // Making the description show up when clicking on the image
    let showInfo = () => {
        // This is where we make the images show up on the page.
        // the onClick is for toggleing the descriptions with the showImage from the useState above.
        let info = <img src={props.image.path} onClick={toggle} height="300px" />
        if (showImage) {
            info = <div onClick = {toggle}><p>{props.image.description}</p></div>
        }
        return info;
    }
    // We Name the toggle
    let toggle = () => {
        setShowImage(!showImage);
    }


    return (
        <div>
            {/* This is where we pull all the info from the showInfo to show up on the page and push it to App.jsx */}
            {showInfo()}
            {/* <img src={image.path} alt={image.description} height="300px"/> */}
            <button onClick ={ () => props.likeCount(props.image.id)} id={props.image.id}>Like!</button>
            <p>{props.image.likes} Likes on the Photo</p>
            {/*  galleryItem.likes += 1; We use likes in here from looking at the gallery.router */}
        </div>
    )
}

export default GalleryItem;