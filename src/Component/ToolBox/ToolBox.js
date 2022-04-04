import React, { useRef } from "react";
import "./Toolbox.css"
import ToolBoxPaperclip from "./ToolBoxPaperclip";

const ToolBox = (props) => {
  const message = useRef(null);
  return (
    <div className="d-flex flex-row align-items-center toolbox">
      <ToolBoxPaperclip></ToolBoxPaperclip>
      
      <div className="p-2 flex-grow-1 ">
        <form onSubmit={(e) => {
          e.preventDefault();
          console.log(message.current.value);
          props.addMessage(message.current.value, "text");
          message.current.value = "";
        }}>
        <div className="input-group">
          <input ref={message}
            type="text"
            className="form-control"
            placeholder="New Message Here..."
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append ">
            <button className="btn btn-outline-light text-light " >
              <a className="btn-text">Send</a>
            </button>
          </div>
        </div>
        </form>
      </div>
    </div>
  );
};

export default ToolBox;
