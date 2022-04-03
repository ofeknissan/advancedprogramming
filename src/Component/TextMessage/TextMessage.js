import React from "react";
import "./TextMessage.css";

const TextMessage = (props) => {
  return (
    <div className="w-50">
    <div class="d-inline-flex flex-column p-2 ms-2 mb-2 bd-highlight message-reciever">
      <div className="left-point"></div>
      <div>please work work work work work work work work</div>
      <div className="ms-auto message-time">19:27</div> 
      <div></div>
    </div>
    </div>
  );
};
export default TextMessage;
