import s from './ImageGalleryItem.module.css';

function ImageGalleryItem() {

    return (
        <>
            <li className={s.ImageGalleryItem}>
                <img className={s.ImageGalleryItemImage} src="" alt="" />
            </li>
        </>

    )
}

export default ImageGalleryItem;