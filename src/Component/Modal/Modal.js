import React, { useState, useRef } from "react";
import "./Modal.css";
function Modal(props) {
    const [contactName, setContact] = useState("");
    const onSubmit = (event) => { 
        event.preventDefault();
        if(contactName != "") {
            props.onsubmit(contactName);
        }
    }
    return (
        <div class="modal fade" id="exampleModal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">
                            Add new contact
                        </h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                        ></button>
                    </div>
                        <form onSubmit={onSubmit}>
                        <div class="modal-body">
                            <div class="mb-3">
                                <label for="contact-name" class="col-form-label">
                                    Contact Username:
                                </label>
                                <input type="text" class="form-control" id="contact-name" placeholder="Contace Username" value={contactName}
                                    onChange={(e) => {
                                        setContact(e.target.value);
                                    }} />
                            </div>
                            <div class="modal-footer">
                            <button type="submit" class="btn btn-primary">
                                Add contact
                            </button>
                            </div>
                            </div>
                        </form>
                </div>
            </div>
        </div>
    );
}

export default Modal;
