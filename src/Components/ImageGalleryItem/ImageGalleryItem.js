import s from './ImageGalleryItem.module.css';

function ImageGalleryItem({ pictures }) {

    return (
        <>
            {pictures.map(picture =>
                <li key={picture.id} className={s.ImageGalleryItem}>
                    <img className={s.ImageGalleryItemImage} src={picture.webformatURL} alt={picture.tag} />
                </li>
            )}


        </>

    )
}

export default ImageGalleryItem;