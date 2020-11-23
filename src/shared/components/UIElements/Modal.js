import React from 'react'
import ReactDOM  from 'react-dom'

const Modal = (props) => {
    const modalportal = (
        <div className="modal fade" id={props.id} tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{props.modalTitle}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {props.children}
                    </div>
                    <div className="modal-footer">
                        {props.footer}
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
    
    return ReactDOM.createPortal(modalportal,document.getElementById("modal-portal"))
    //return ReactDOM.createPortal(modalportal,document.getElementById("modal-portal"));
}

export default Modal
