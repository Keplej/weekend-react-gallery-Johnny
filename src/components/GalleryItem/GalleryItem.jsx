

// Trying to get images from the image folder without trying to list them all out
// Maybe by trying to grab the id?
function GalleryItem(props) {



    const image = props.image;
    const item = props.like;
    return (
        <div>
            <img src={image.path} alt={image.description} height="300px"/>
            {/* <button onClick { () => {likeCount())}}></button> */}
            <button>Like!</button>
        </div>
    )
}

export default GalleryItem;