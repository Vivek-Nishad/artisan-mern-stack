import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:deepika8444@gmail.com">
        <Button>Mail: artisttale@gmail.com</Button>
        
      </a>
    </div>
  );
};

export default Contact;
