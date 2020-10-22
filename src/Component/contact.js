import React from "react";

import Avatar from "./Avatar";


let getCurrentdate = new Date().toISOString();

function card(props) {
  return (
    <div className="container mt-4">
      <div className="card mt-4">
        <div className="card-body">
          <h3 className="card-title">Contact Name: {props.name} </h3>
          <Avatar img={props.img} />
          <div className="contact mt-4">
            <p>Phone :{props.phone}</p>
            <p>Email:{props.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default card;
