import React from "react";

const Notification = ({ message }) => {
  if (message === null) {
    return null;
  } else {
    return (
      <div className="notification">
        <h1> {message}</h1>
      </div>
    );
  }
};

export default Notification;
