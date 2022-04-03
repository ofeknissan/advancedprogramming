import React from "react";
import "./UserDeatils.css";
import Modal from "../Modal/Modal.js";

const UserDeatils = (props) => {
  return (
    <div class="d-flex bd-highlight align-items-center user-details-box">
      <div class="p-2 user-img-div">
        <img className="user-img" src={"/Images/" + props.img}></img>
      </div>
      <div class="p-2 bd-highlight">{props.children}</div>
      <button class="p-2 me-3 ms-auto btn btn-outline-dark btn-modal" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-person-plus"
          viewBox="0 0 16 16"
        >
          <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
          <path
            fill-rule="evenodd"
            d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
          />
        </svg>
      </button>
      <Modal onsubmit={props.onsubmit}></Modal>
    </div>
  );
};

export default UserDeatils;
