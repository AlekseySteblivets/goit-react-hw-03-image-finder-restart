import s from './Button.module.css';

export default function Button({ onClickButton }) {
    return (
        <button className={s.btnLoadMore} onClick={onClickButton}>Load more</button>
    )
}