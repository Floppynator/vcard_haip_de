import React from "react";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Awards() {
  return (
    <div className="flex flex-col">
      <h2 className="mb-2 text-xl font-bold text-haip-dark uppercase">
        <FontAwesomeIcon icon={faAward} className="mr-2 text-haip-light" />
        Auszeichnungen
      </h2>
      <h3 className="font-bold">UXQB / CPUX-F</h3>
      <p className="text-sm">
        Certified Professional for Usability and User Experience
      </p>
    </div>
  );
}
