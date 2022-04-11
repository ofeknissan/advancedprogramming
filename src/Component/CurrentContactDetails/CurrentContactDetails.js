import React from 'react'

const CurrentContactDetails = (props) => {
    return (
        <div className="d-flex text-light bd-highlight align-items-center user-details-box">
          <div className="p-2 user-img-div">
            <img className="user-img" src={props.img}></img>
          </div>
          <div className="p-2 bd-highlight">{props.children}</div>
        </div>
      );
    };

export default CurrentContactDetails