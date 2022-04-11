import React from 'react'
import "./ContactDetails.css"
const ContactDetails = (props) => {
  return (
    <div onClick={()=>{props.onClick(props.name,props.img)}} class={`d-flex text-light bd-highlight align-items-center contact-details ${props.isClicked && 'contact-clicked'}`}>
      <div class="p-2 user-img ">
        <img className="contactImage" src={props.img}></img>
      </div>
      <div class="ms-5 Contact-message">
      <div class="bd-highlight Contact-Name">{props.name}</div>
      <a>Have you see the news?</a>
      </div>
      <div class="p-2 ms-auto bd-highlight">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-three-dots"
          viewBox="0 0 16 16"
          className='contact-icon'
        >
          <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
        </svg>
      </div>
    </div>
  );
}

export default ContactDetails