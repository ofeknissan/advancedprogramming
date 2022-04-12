import React, {useState} from "react";
import "./ImageMessage.css";
function stringGen(len) {
    var text = "";
    
    var charset = "abcdefghijklmnopqrstuvwxyz0123456789";
    
    for (var i = 0; i < len; i++)
      text += charset.charAt(Math.floor(Math.random() * charset.length));
    
    return text;
  }
const ImageMessage = (props) => {
    const [id,setId] = useState(stringGen(7));
    return (
      <>
        <div className={`${props.isSender && "ms-auto"} bubble-wrapper`}>
          <div
            className={`d-inline-flex flex-column p-2 ms-2 mb-2 bd-highlight ${
              !props.isSender && "Imessage-reciever"
            } ${props.isSender && "Imessage-sender"}`}
          >
            <div className="left-point"></div>
            <img
              data-bs-toggle="modal"
              data-bs-target={'#'+id}
              className="img-message"
              src={props.children}
            />
            <div className="ms-auto message-time">{props.time}</div>
            <div></div>
          </div>
        </div>
        <div
          class="modal fade"
          id={id}
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content modal-current-contact">
              <div class="modal-body">
                <center>
                  <img src={props.children} className="message-img" />
                </center>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};
export default ImageMessage;
