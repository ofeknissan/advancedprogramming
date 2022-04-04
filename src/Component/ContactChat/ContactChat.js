import React from "react";
import TextMessage from "../TextMessage/TextMessage";
import UserDeatils from "../UserDeatils/UserDeatils";
import "./ContactChat.css"
const ContactChat = (props) => {
  const contactId = props.contactId;
  const userData = {
    image: "",
  };
  const myName = "test";
  if (props.isDefault) {
    return <div class="flex-grow-1 default-contact"> <h1>Welcome to Whatsapp</h1></div>;
  }
  return (
    <div className="flex-grow-1 d-flex flex-column">
      <UserDeatils img={userData.image}> {myName} </UserDeatils>
      <div className="flex-grow-1 overflow-chat overflow-auto">
        <div className="d-flex flex-column align-items-start  justify-content-end px-3">
          {props.messages.map((message) => {
            return (
              <TextMessage time={message.time} isSender={message.isLeft}>
                {message.data}
              </TextMessage>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactChat;
