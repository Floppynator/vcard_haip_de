import React from "react";
import {
  faGlobe,
  faPhone,
  faEnvelope,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faXing,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Contact(props) {
  return (
    <div className={`flex flex-col ${props.classNames} space-y-1`}>
      <h2 className="mb-2 text-xl font-bold text-haip-dark uppercase">
        <FontAwesomeIcon
          icon={faAddressBook}
          className="mr-1 text-haip-light"
        />{" "}
        Kontakt
      </h2>
      <div className="flex flex-row gap-2">
        <p>
          <a href="//www.haip.de">
            <FontAwesomeIcon icon={faGlobe} />
          </a>
        </p>
        <p>
          <a
            href="https://github.com/Floppynator"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/christianhaip/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </p>
        <p>
          <a
            href="https://www.xing.com/profile/Christian_Haip"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faXing} />
          </a>
        </p>
        <p>
          <a href="mailto:christian@haip.de" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </p>
        <p>
          <a href="tel:01775525714" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faPhone} />
          </a>
        </p>
      </div>
    </div>
  );
}
