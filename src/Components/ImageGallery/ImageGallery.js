import ImageGalleryItem from '../ImageGalleryItem'
import s from './ImageGallery.module.css';


function ImageGallery() {

    return (
        <ul className={s.ImageGallery}>
            {/* <!-- Набор <li> с изображениями --> */}
            <ImageGalleryItem />
        </ul>
    )
}

export default ImageGallery;