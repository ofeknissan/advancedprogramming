import React, { useRef, useState } from "react";
import { getUserData, isExist } from "../../Util/submitHandler";
import Message from "../../Util/Message";
import "./Chat.css";
import UserDeatils from "../UserDeatils/UserDeatils";
import ContactDetails from "../ContactDetails/ContactDetails";
import ToolBox from "../ToolBox/ToolBox";
import ContactChat from "../ContactChat/ContactChat";
import  {getContactsByName} from "../../Util/userMessages"
import { forEach } from "../ToolBox/EmojiPicker/Emojis";


const Chat = () => {
  //get params from URL
  let params = new URLSearchParams(document.location.search);
  const myName = params.get("name");

  const [currentContact, setCurrentContact] = useState({contact:"",img: "",display: ""})
  //const myName = "matan";
  const [contacts, setContacts] = useState(getContactsByName(myName))
  const [contactsList, setContactsList] = useState(contacts);
  const userData = getUserData(myName);
  let keys = Object.keys(contactsList)
  function onSubmit(username){
    console.log(username in contacts)
    console.log( myName === username)
    console.log(!(isExist(username)))
    if (username in contacts || myName === username || !(isExist(username))) {
      return false;
    }
    let temp = contacts;
    console.log(contacts)
    temp[username] = [];
    setContacts({...temp});
    setContactsList({...temp});
    console.log(contacts)
    return true;
  }
  
  const last_message = (message) => {
    if(message.type == 'voice') {
      return 'Voice Message';
    } else if (message.type =='image') {
      return 'Image Message';
    } else if (message.type =='video') {
      return 'Video Message';
    } else if (message.type =='file') {
      return 'File Message';
    } else if (message.type =='geo') {
      return 'Location Message';
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
    return <ContactDetails name={contact} display={getUserData(contact).display} isClicked={currentContact.contact === contact} onClick={(contact, img, display) => { setCurrentContact({ contact: contact, img: img, display: display }) }} img={getUserData(contact).image} key={key} time={contacts[contact].slice(-1)[0].seconds}>{last_message(contacts[contact].slice(-1)[0])}</ContactDetails>
    }
    catch(error) {
      return <ContactDetails name={contact} display={getUserData(contact).display} isClicked={currentContact.contact === contact} onClick={(contact, img, display) => { setCurrentContact({ contact: contact, img: img, display: display }) }} img={getUserData(contact).image} key={key} time={null}>{''}</ContactDetails>
    }
  });

  const doSearch = (e) => {
    let contactName = Object.keys(contacts);
    contactName = contactName.filter(contact => contact.indexOf(e.target.value) == 0);
    let specificContacts={};
    contactName.forEach(item => {
      specificContacts[item] = contacts[item];
    })
    setContactsList(specificContacts)
  }
  
  return (
    <div className="chat-bg">
      <div className="container-fluid full-chat-box">
        <div className="row h-100">
          <div className="col-5 p-0 contact-bg">
            <div className="d-flex flex-column h-100">
              <UserDeatils onsubmit={onSubmit} img={userData.image}>
                {" "}
                {userData.display}
              </UserDeatils>
              <div className="searchBar">
                  <form class="form-inline">
                    <input
                      className="form-control mr-sm-2 search-bar"
                      type="search"
                      placeholder="Search Contact"
                      aria-label="Search"
                      onChange={doSearch}
                    />
                  </form>
              </div>
              <div className="contact-box">
                <div className="contact-content">{contactList}</div>
              </div>
            </div>
          </div>
          <div className="col-7 p-0 flex contact-char-bg">
            <div className="d-flex flex-column h-100">
              <ContactChat
                isDefault={currentContact.contact === ""}
                messages={contacts[currentContact.contact]}
                currentContact={currentContact}
              />
              {!(currentContact.contact === "") && (
                <ToolBox addMessage={addMessage} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
