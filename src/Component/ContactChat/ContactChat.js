import React, { useEffect, useRef } from "react";
import TextMessage from "../TextMessage/TextMessage";
import VoiceMessage from "../VoiceMessage/VoiceMessage";

import "./ContactChat.css";
import CurrentContactDetails from "../CurrentContactDetails/CurrentContactDetails";
import ImageMessage from "../ImageMessage/ImageMessage";
const ContactChat = (props) => {
  const contactId = props.contactId;
  const messages = useRef(null);
  useEffect(() => {
    if (messages.current) {
      messages.current.scrollTop = messages.current.scrollHeight;
    }
  },);
  if (props.isDefault) {
    return (
      <div class="flex-grow-1 default-contact">
        {" "}
      </div>
    );
  }
  return (
    <div className="flex-grow-1 d-flex flex-column">
      <CurrentContactDetails img={props.currentContact.img}>
        {" "}
        {props.currentContact.contact}{" "}
      </CurrentContactDetails>
      <div ref={messages} className="flex-grow-1 overflow-chat overflow-auto">
        <div
          className="d-flex flex-column align-items-start  justify-content-end px-3"
        >
          {props.messages.map((message) => {
            if(message.type == "text") {
              return (
                <TextMessage time={message.time} isSender={message.isLeft}>
                  {message.data}
                </TextMessage>
              );
            } else if(message.type == "voice") {
              return (
                <VoiceMessage time={message.time} isSender={message.isLeft}>
                  {message.data}
                </VoiceMessage>
              );
            } else if(message.type == "image") {
              return (
                <ImageMessage time={message.time} isSender={message.isLeft}>
                  {message.data}
                </ImageMessage>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactChat;
