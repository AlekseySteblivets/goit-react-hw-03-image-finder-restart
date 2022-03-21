

import s from './ImageGallery.module.css';


function ImageGallery({ children }) {

    return (
        <ul className={s.ImageGallery}>
            {/* <!-- Набор <li> с изображениями --> */}
            {children}

        </ul>
    )
}

export default ImageGallery;