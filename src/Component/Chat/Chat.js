import React from "react";
import { getUserData } from "../../Util/submitHandler";
import "./Chat.css";
import TextMessage from "../TextMessage/TextMessage";
import UserDeatils from "../UserDeatils/UserDeatils";
import ContactDetails from "../ContactDetails/ContactDetails";
import ToolBox from "../ToolBox/ToolBox";
const Chat = () => {
  /*
  let params = new URLSearchParams(document.location.search);
  const name = params.get("name");
  const userData = getUserData(name);
  */
  const name = "test";
  const userData = "test";
  return (
    <div className="test">
      <div class="container full-chat-box">
        <div class="row h-100">
        <div class="col-5 p-0">
            <div class="d-flex flex-column h-100">
            <div className="test"><UserDeatils img={userData.image}> {name} </UserDeatils></div>
            <div className="contact-box">
              <div className="contact-content">
              <ContactDetails name="tester" img="" />
              <ContactDetails name="tester" img="" />
              <ContactDetails name="tester" img="" />
              <ContactDetails name="tester" img="" />
              <ContactDetails name="tester" img="" />
              <ContactDetails name="tester" img="" />
              <ContactDetails name="tester" img="" />
              <ContactDetails name="tester" img="" />
              <ContactDetails name="last" img="" />
              </div>
            </div>
            </div>
          </div>
          <div class="col-7 chat-box">
          <div class="d-flex flex-column-reverse h-100">
            <ToolBox/>
            <div>test</div>
            <div>test</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
