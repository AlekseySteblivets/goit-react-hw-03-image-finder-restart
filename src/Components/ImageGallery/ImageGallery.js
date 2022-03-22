

import s from './ImageGallery.module.css';


function ImageGallery({ children, onClickReadyPicture }) {

    return (
        <ul className={s.ImageGallery} onClick={onClickReadyPicture}>
            {/* <!-- Набор <li> с изображениями --> */}
            {children}

        </ul>
    )
}

export default ImageGallery;