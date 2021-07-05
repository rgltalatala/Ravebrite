import React from "react";



const Modal = props => {
    if (!props.show){
        return null
    }

    return (
        <div className='modal' onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">Login or Sign up</h4>
                </div>
                <div className="modal-body">
                    
                </div>
                <div className="modal-footer">
                    <button className='button' onClick={props.onClose}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal