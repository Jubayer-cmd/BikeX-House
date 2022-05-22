import React from "react";
import { Spinner } from "react-bootstrap";

function componentName() {
  return (
    <div>
      <Spinner
        className=" dflex justify-content-center mx-auto"
        animation="border"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default componentName;
