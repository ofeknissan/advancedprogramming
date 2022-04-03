import React from 'react'
import TextMessage from "../TextMessage/TextMessage";
import UserDeatils from '../UserDeatils/UserDeatils';
const ContactChat = (props) => {
    const contactId = props.contactId;
    const userData = {
        image:""
    };
    const myName = "test"
  return (
    <div className="flex-grow-1 d-flex flex-column">
      <UserDeatils img={userData.image}> {myName} </UserDeatils>
      <div className="flex-grow-1 overflow-chat overflow-auto">
        <div className="d-flex flex-column align-items-start  justify-content-end px-3">
          <TextMessage />
          <TextMessage />
          <TextMessage />
          <TextMessage />
          <TextMessage />
        </div>
      </div>
    </div>
  );
}

export default ContactChat