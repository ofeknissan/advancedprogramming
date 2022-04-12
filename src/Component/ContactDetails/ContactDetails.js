import React from 'react'
import "./ContactDetails.css"
import {convertLastTime} from "../../Util/TimeCompute"
const ContactDetails = (props) => {
  console.log("re-render details")
  return (
    <div
      onClick={() => {
        props.onClick(props.name, props.img);
      }}
      class={`d-flex text-light bd-highlight align-items-center contact-details ${
        props.isClicked && "contact-clicked"
      }`}
    >
      <div class="p-2  flex-shrink-0 ">
        <img className="contactImage" src={props.img}></img>
      </div>
      <div class="ms-4 Contact-message flex-grow-1">
        <div class="bd-highlight Contact-Name">
          {props.name} {props.time != null && <h6 className="ms-auto time-ago">{convertLastTime(props.time)}</h6>}
        </div>
        <div className="lastMessage">{props.children}</div>
      </div>
    </div>
  );
}

export default ContactDetails