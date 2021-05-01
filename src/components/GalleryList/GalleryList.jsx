import GalleryItem from '../GalleryItem/GalleryItem.jsx';


function GalleryList(props) {
    return (
        <div>
            {props.galleryList.map (image => 
                (<GalleryItem key={image.id} image={image}/>)
            )}
        </div>
    )
}

export default GalleryList;