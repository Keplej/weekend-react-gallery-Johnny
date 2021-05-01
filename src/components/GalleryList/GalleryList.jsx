import GalleryItem from '../GalleryItem/GalleryItem.jsx';


function GalleryList(props) {
    return (
        <div>
            {props.galleryList.map (image => 
                (<GalleryItem key={image.id} image={image} likeCount={props.likeCount}/>)
                //Trying to add in a like counter. Starting here to have to linked up after the 
                //code in gallery item is added in
            )}
        </div>
    )
}

export default GalleryList;