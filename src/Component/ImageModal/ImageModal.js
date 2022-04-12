import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

import "./ImageModal.css";
const ImageModal = (props) => {
  const [file, setFile] = useState(null);
  const fileHandler = (e) => {
    e.preventDefault();
    console.log(file)
    props.addMessage(URL.createObjectURL(file), "image");
    props.handleClose()
  };

  return (
    <>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Send Image</Modal.Title>
        </Modal.Header>
        <form onSubmit={fileHandler}>
        <Modal.Body>
          <label htmlFor="imageInput" className="form-label text-light fs-5">
            image
          </label>
          <div class="input-group mb-2">
            <input
              id="imageInput"
              type="file"
              onChange={(e)=>{setFile(e.target.files[0])}}
              className={`form-control ${props.imageUpload && "image-input"}`}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="button-input">
              <input
                type="submit"
                className="btn btn-md btn-input btn-dark border border-light border-3 mt-2"
                value="submit"
              />
          </div>
        </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default ImageModal;
