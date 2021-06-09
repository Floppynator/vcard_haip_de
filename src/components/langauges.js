import React from "react";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Langauages() {
  return (
    <div className="flex flex-col">
      <h2 className="mb-2 text-xl font-bold text-haip-dark uppercase">
        <FontAwesomeIcon icon={faLanguage} className="mr-2 text-haip-light" />
        Sprachen
      </h2>
      <p className="text-sm">
        Deutsch <span className="text-xs">(Muttersprache)</span>
      </p>
      <p className="text-sm">
        Englisch <span className="text-xs">(Gut)</span>
      </p>
    </div>
  );
}
