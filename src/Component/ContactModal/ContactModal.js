import React, { useState, useRef } from "react";
import "./ContactModal.css";
import Modal from "react-bootstrap/Modal";

function ContactModal(props) {
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false)
  const handleShow = () => setShow(true);
  const [contactName, setContact] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
      if (contactName === "") {
        return;
      }
      const flag = props.onsubmit(contactName);
      if(flag){
      handleClose();
      setError(false);
      } else {
        setError(true);
    }
  };
  const handleClose = () => {setShow(false); setError(false)};
  return (
    <>
      <button
        onClick={()=>{setContact("");handleShow();}}
        className="p-2 me-3 ms-auto btn btn-light btn-modal"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-person-plus"
          viewBox="0 0 16 16"
        >
          <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
          <path
            fillRule="evenodd"
            d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
          />
        </svg>
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new contact</Modal.Title>
        </Modal.Header>
        <form onSubmit={onSubmit}>
          <Modal.Body>
            <div className="mb-3">
              <label for="contact-name" className="col-form-label">
                Contact Username:
              </label>
              <input
                type="text"
                className="form-control"
                id="contact-name"
                placeholder="Contact Username"
                value={contactName}
                onChange={(e) => {
                  setContact(e.target.value);
                }}
              />
              {error && <span className="error-contact">Error! Contact cannot be added.</span>}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button type="submit" className="btn btn-primary">
              Add contact
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
export default ContactModal;
