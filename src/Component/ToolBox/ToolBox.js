import React from "react";

const ToolBox = () => {
  return (
    <div class="d-flex flex-row align-items-center">
      <div class="p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-paperclip"
          viewBox="0 0 16 16"
        >
          <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
        </svg>
      </div>
      <div class="p-2 flex-grow-1 ">
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="New Message Here..."
            aria-describedby="basic-addon2"
          />
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolBox;
