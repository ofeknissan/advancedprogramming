import React from "react";
import { getUserData } from "../../Util/submitHandler";
import Message from "../../Util/Message";
import "./Chat.css";
import UserDeatils from "../UserDeatils/UserDeatils";
import ContactDetails from "../ContactDetails/ContactDetails";
import ToolBox from "../ToolBox/ToolBox";
const Chat = () => {
  /*
  let params = new URLSearchParams(document.location.search);
  const name = params.get("name");
  */
  const myName = "matan";
  const userData = getUserData(myName);
  console.log(userData);
  console.log(userData.image);

  //TODO - when adding contacts should contact be a registered account from hardcoded list?
  const contacts = [{ username: "ofek", messages: [new Message("matan","ofek","Hello!","12:50","text"), new Message("ofek","matan","Hello there!!","12:55","text")]},
  { username: "tamir", messages: [new Message("matan","elad","tamir!","12:50","text"), new Message("tamir","matan","Hello there!!","12:55","text")]},
  { username: "elad", messages: [new Message("matan","elad","Hello!","12:50","text"), new Message("elad","matan","Hello there!!","12:55","text")] },]

  const userContacts = new Map();
  userContacts.set("matan", contacts)
  const contactList = contacts.map((contact, key)=>{
    return <ContactDetails name={contact.username} img={getUserData(contact.username).image} key={key} />
  });

  return (
    <div className="test">
      <div className="container full-chat-box">
        <div className="row h-100">
          <div className="col-5 p-0">
            <div className="d-flex flex-column h-100">
              <div className="test">
                <UserDeatils onsubmit={addNewContact} img={userData.image}> {myName} </UserDeatils>
              </div>
              <div className="contact-box">
                <div className="contact-content">
                  {contactList}
                </div>
              </div>
            </div>
          </div>
          <div className="col-7 flex">
          <div className="d-flex flex-column  h-100">
          <UserDeatils img={userData.image}> {myName} </UserDeatils>
            <div className="flex-grow-1 h-0 overflow-auto">
              <div className="d-flex flex-column align-items-start  justify-content-end px-3">
              <div>test1</div>
              <div>test3</div>
              <div>test1</div>
              <div>test1</div>
              <div>test2</div>
              <div>test3</div>
              <div>test1</div>
              <div>test2</div>
              <div>test3</div>
              <div>test3</div>
              <div>test1</div>
              <div>test2</div>
              <div>test3</div>
              <div>test1</div>
              <div>test2</div>
              <div>test3</div>
              <div>test3</div>
              <div>test1</div>
              <div>test2</div>
              <div>test3</div>
              <div>test1</div>
              <div>test2</div>
              <div>test3</div>
              <div>test3</div>
              <div>test1</div>
              <div>test2</div>
              <div>test3</div>
              <div>test1</div>
              <div>test2</div>
              <div>test3</div>
              <div>test3</div>
              <div>test1</div>
              <div>test2</div>
              <div>test3</div>
              <div>test1</div>
              <div>test2</div>
              <div>test3</div>
              <div>test3</div>
              <div>test1</div>
              <div>test2</div>
              <div>test2</div>
              <div>test3</div>
              <div>test3</div>
              <div>test1</div>
              <div>test2</div>
              <div>test2</div>
              <div>test3</div>
              <div>test3</div>
              <div>test1</div>
              <div>test2</div>
              <div>test3</div>
              <div>test3</div>
              <div>test1</div>
              <div>test2</div>
              <div>test3</div>
              <div>test1</div>
              <div>test2</div>
              <div>test3</div>
              <div>test1</div>
              <div>test2</div>
              <div>test3</div>
              <div>test1</div>
              <div>test2</div>
              <div>test3</div>
              </div>
            </div>
            <ToolBox/>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function addNewContact(username){
  //if(userContacts.get(myName)){}
}
export default Chat;
