import React from "react";
import { faChild } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Interests() {
  return (
    <div className="flex flex-col">
      <h2 className="mb-2 text-xl font-bold text-haip-dark uppercase">
        <FontAwesomeIcon icon={faChild} className="mr-2 text-haip-light" />{" "}
        Interessen
      </h2>
      <p className="text-sm">3D-Druck</p>
      <p className="text-sm">CAD</p>
      <p className="text-sm">Angeln</p>
    </div>
  );
}
