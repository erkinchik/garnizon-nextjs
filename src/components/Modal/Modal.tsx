import React, {FC} from 'react';
import styles from './Modal.module.scss'


interface ModalProps {
    active: any,
    setActive: any,
    children: any,
}

const Modal:FC<ModalProps> = ({active, setActive, children}) => {
    return (
        <div className={active ?` ${styles.modal} ${styles.active}`:`${styles.modal}`} onClick={() => setActive(true)}>
            <div className={ active ? `${styles.modal__content} ${styles.active}` : `${styles.modal__content}`} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;