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
  */
  const name = "matan";
  const userData = getUserData(name);
  console.log(userData);
  console.log(userData.image);
  return (
    <div className="test">
      <div class="container full-chat-box">
        <div class="row h-100">
          <div class="col-5 p-0">
            <div class="d-flex flex-column h-100">
              <div className="test">
                <UserDeatils img={userData.image}> {name} </UserDeatils>
              </div>
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
                  <ContactDetails name="tester" img="" />
                  <ContactDetails name="tester" img="" />
                  <ContactDetails name="tester" img="" />
                  <ContactDetails name="tester" img="" />
                  <ContactDetails name="tester" img="" />
                  <ContactDetails name="tester" img="" />
                  <ContactDetails name="tester" img="" />
                  <ContactDetails name="tester" img="" />
                  <ContactDetails name="last" img="" />
                  <ContactDetails name="tester" img="" />
                  <ContactDetails name="tester" img="" />
                  <ContactDetails name="tester" img="" />
                  <ContactDetails name="tester" img="" />
                  <ContactDetails name="tester" img="" />
                  <ContactDetails name="tester" img="" />
                  <ContactDetails name="tester" img="" />
                  <ContactDetails name="tester" img="" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-7 flex">
          <div class="d-flex flex-column  h-100">
          <UserDeatils img={userData.image}> {name} </UserDeatils>
            <div class="flex-grow-1 h-0 overflow-auto">
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

export default Chat;
