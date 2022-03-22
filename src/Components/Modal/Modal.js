import { Component } from "react";
import s from './Modal.module.css';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {

    componentDidMount() {
        console.log('componentDidMount');

        window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        window.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    }

    handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    }

    render() {
        return createPortal(
            <div className={s.modalBackdrop} onClick={this.handleBackdropClick}>
                <div className={s.modalContent}> <img src={this.props.largeImg} alt="" /></div>
            </div>,
            modalRoot
        )
    };
}

export default Modal;