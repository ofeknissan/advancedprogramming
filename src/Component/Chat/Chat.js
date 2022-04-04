import React, { useEffect, useState } from "react";
import { getUserData } from "../../Util/submitHandler";
import Message from "../../Util/Message";
import "./Chat.css";
import UserDeatils from "../UserDeatils/UserDeatils";
import ContactDetails from "../ContactDetails/ContactDetails";
import ToolBox from "../ToolBox/ToolBox";
import ContactChat from "../ContactChat/ContactChat";
import  {getContactsByName} from "../../Util/userMessages"

const Chat = () => {
  
  let params = new URLSearchParams(document.location.search);
  const myName = params.get("name");
  //const myName = "matan";
  const [contacts, setContacts] = useState(getContactsByName(myName))
  const userData = getUserData(myName);
  let keys = Object.keys(contacts)
  console.log(contacts);
  //TODO - when adding contacts should contact be a registered account from hardcoded list?
  const contactList = keys.map((contact, key)=>{
    return <ContactDetails name={contact} img={getUserData(contact).image} key={key} />
  });

  function onSubmit(username){
    //TODO- maybe check if new contact exists. and alert if error
    if (username in contacts || myName === username) {
      console.log("nooo")
      return;
    }
    let temp = contacts;
    temp[username] = [];
    setContacts({...temp});
  }
  return (
    <div className="test">
      <div className="container full-chat-box">
        <div className="row h-100">
          <div className="col-5 p-0">
            <div className="d-flex flex-column h-100">
                <UserDeatils onsubmit={onSubmit} img={userData.image}> {myName} </UserDeatils>
              <div className="contact-box">
                <div className="contact-content">
                  {contactList}
                </div>
              </div>
            </div>
          </div>
          <div className="col-7 flex">
          <div className="d-flex flex-column  h-100">
            <ContactChat contactId=""/>
            <ToolBox/>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
