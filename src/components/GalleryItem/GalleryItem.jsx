

// Trying to get images from the image folder without trying to list them all out

import { useState } from "react";

// Maybe by trying to grab the id?
function GalleryItem(props) {
    // const image = props.image;
    const [showImage, setShowImage] = useState();
    
    // Making the description show up when clicking on the image
    let showInfo = () => {
        let info = <img src={props.image.path} onClick={toggle} height="300px" />
        if (showImage) {
            info = <div onClick = {toggle}><p>{props.image.description}</p></div>
        }
        return info;
    }

    let toggle = () => {
        setShowImage(!showImage);
    }


    return (
        <div>
            {showInfo()}
            {/* <img src={image.path} alt={image.description} height="300px"/> */}
            <button onClick ={ () => props.likeCount(props.image.id)} id={props.image.id}>Like!</button>
            <p>{props.image.likes} Likes on the Photo</p>
        </div>
        // galleryItem.likes += 1; We use likes in here from looking at the gallery.router
    )
}

export default GalleryItem;