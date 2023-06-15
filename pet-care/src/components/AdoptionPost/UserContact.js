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
        >
          &nbsp;
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
          href={`https://api.whatsapp.com/send?phone=${props.whatsappNumber}`}
        >
          &nbsp;
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
          href={`tel:${props.phoneNumber}`}
        >
          &nbsp;
        </a>
      </div>
    </div>
  );
}
