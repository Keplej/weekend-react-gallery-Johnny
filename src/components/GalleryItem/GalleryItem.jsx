

// Trying to get images from the image folder without trying to list them all out
// Maybe by trying to grab the id?
function GalleryItem(props) {
    const image = props.image;
    
    return (
        <div>
            <img src={image.path} alt={image.description} height="300px"/>
            <button onClick ={ () => props.likeCount(props.image.id)} id={props.image.id}>Like!</button>
            {/* <p {props.image.}></p> */}
        </div>
    )
}

export default GalleryItem;