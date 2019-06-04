import * as React from 'react'
import '../../resources/styles/modal.scss'

const Modal = ({ onClose }) => {
    return (<React.Fragment>
        <div className="modal">
                <div className="modal-content">
                    <span onClick={onClose} className="close">&times;</span>
                    <p>Data Is Uploaded..</p>
                </div>
        </div>
    </React.Fragment>
    )
}
export default Modal;