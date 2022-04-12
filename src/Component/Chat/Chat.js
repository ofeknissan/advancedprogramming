import React, { useRef, useState } from "react";
import { getUserData, isExist } from "../../Util/submitHandler";
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
  const [currentContact, setCurrentContact] = useState({contact:"",img: ""})
  //const myName = "matan";
  const [contacts, setContacts] = useState(getContactsByName(myName))
  const userData = getUserData(myName);
  let keys = Object.keys(contacts)
  function onSubmit(username){
    //TODO- maybe check if new contact exists. and alert if error
    if (username in contacts || myName === username || !(isExist(username))) {
      return false;
    }
    let temp = contacts;
    temp[username] = [];
    setContacts({...temp});
    return true;
  }
  
  const last_message = (message) => {
    if(message.type == 'voice') {
      return 'Voice Message';
    } else if (message.type =='image') {
      return 'Image';
    }
    return message.data;
  }

  function addMessage(message,format) {
    const todayDate = new Date();
    let hour = todayDate.getHours();
    let minute = todayDate.getMinutes();
    let time
    if (minute < 10) {
      minute = "0" + String(minute);
    }
    if(hour < 10) {
      hour = "0" + String(hour);
    }
    time = String(hour) + ":" + String(minute)
    contacts[currentContact.contact].push(new Message(message, time, format, false, Math.floor(todayDate.getTime()/1000)));
    setContacts({...contacts});
  }

    //TODO - when adding contacts should contact be a registered account from hardcoded list?
  const contactList = keys.map((contact, key) => {
    try{
    return <ContactDetails name={contact} isClicked={currentContact.contact === contact} onClick={(contact, img) => { setCurrentContact({ contact: contact, img: img }) }} img={getUserData(contact).image} key={key} time={contacts[contact].slice(-1)[0].seconds}>{last_message(contacts[contact].slice(-1)[0])}</ContactDetails>
    }
    catch(error) {
      return <ContactDetails name={contact} isClicked={currentContact.contact === contact} onClick={(contact, img) => { setCurrentContact({ contact: contact, img: img }) }} img={getUserData(contact).image} key={key} time={null}>{''}</ContactDetails>
    }
  });
  return (
    <div className="chat-bg">
      <div className="container-fluid full-chat-box">
        <div className="row h-100">
          <div className="col-5 p-0 contact-bg">
            <div className="d-flex flex-column h-100">
                <UserDeatils onsubmit={onSubmit}img={userData.image}> {myName} </UserDeatils>
              <div className="contact-box">
                <div className="contact-content">
                  {contactList}
                </div>
              </div>
            </div>
          </div>
          <div className="col-7 p-0 flex contact-char-bg">
          <div className="d-flex flex-column h-100">
            <ContactChat  isDefault={currentContact.contact === ""} messages={contacts[currentContact.contact]} currentContact={currentContact}/>
            {!(currentContact.contact === "") && <ToolBox  addMessage={addMessage}/>}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
