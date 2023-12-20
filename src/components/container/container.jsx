import React from "react";
import "./container.css";
export default function Container(props) {
  return (
    <React.Fragment>
      <div className="container">{props.children}</div>
    </React.Fragment>
  );
}
