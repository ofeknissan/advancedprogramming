import React from "react";
import "./Modal.css";

function Modal(props) {
  return (
    <div class="modal fade" id="exampleModal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                        Add new contact
                    </h5>
                    <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    ></button>
                </div>
                <div class="modal-body">
                <form>
                    <div class="mb-5">
                        <label for="recipient-name" class="col-form-label">
                            Recipient:
                        </label>
                        <input type="text" class="form-control" id="recipient-name" />
                    </div>
                    <div class="mb-3">
                        <label for="message-text" class="col-form-label">
                            Message:
                        </label>
                        <textarea class="form-control" id="message-text"></textarea>
                    </div>
                </form>
            </div>
                <div class="modal-footer">
                    <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                    >
                    Close
                    </button>
                    <button type="button" class="btn btn-primary">
                    Save changes
                    </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
