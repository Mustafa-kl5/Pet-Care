import React from "react";
import "../../componentStyle/AdoptionPost/UserContact.css";
export default function UserContact(props) {
  return (
    <div className="contact-holder">
      <div className="owner-word">Owner Social Media:</div>
      <div className="contact-item-holder">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
          href={`${props.facebookLink}`}
        ></a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
          href={`https://api.whatsapp.com/send?phone=${props.whatsappNumber}`}
        ></a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
          href={`tel:${props.phoneNumber}`}
        ></a>
      </div>
    </div>
  );
}
