import React, { useState } from "react";
import "./Toolbox.css";
import { DropdownButton } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";

const ToolBoxPaperclip = (props) => {

  return (
    <div className="ms-2">

  <DropdownButton
        //as={ButtonGroup}
        drop='up'
        variant="light my-dropdown-toggle"
        title={<svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-paperclip"
            viewBox="0 0 16 16"
          >
            <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
          </svg>}
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </DropdownButton>
    </div>
  );
};
export default ToolBoxPaperclip;
