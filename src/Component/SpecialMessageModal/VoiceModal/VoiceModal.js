import React, { useState, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function VoiceModal(props) {
  const [contactName, setContact] = useState("");
  const [isRecording, setIsRecording] = useState(false);
 
  function handleRecord(){
      console.log("TeSt")
    setIsRecording(true)
  }
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Record Voice Message</Modal.Title>
        </Modal.Header>
          <Modal.Body>
          <button type="button" onClick={()=>{handleRecord()}} class="btn btn-primary" disabled={isRecording && "disabled"}>Record</button>
          <button type="button" class="btn btn-primary" disabled={!isRecording && "disabled"}>Stop Recording</button>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>Close</Button>
          </Modal.Footer>
      </Modal>
      </>);
}
export default VoiceModal;
