import React, { useState } from "react";
import "./TextMessage.css";

const TextMessage = (props) => {
  return (
    <div class="container messageBlob">
      <img src="/w3images/bandmember.jpg" alt="Avatar" />
      <p>Hello. How are you today?</p>
      <span class="time-right">11:00</span>
    </div>
  );
};
export default TextMessage;
