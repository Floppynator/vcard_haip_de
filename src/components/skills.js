import React from "react";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Skills() {
  return (
    <div className="flex flex-col">
      <h2 className="text-xl font-bold text-haip-dark uppercase">
        <FontAwesomeIcon icon={faWrench} className="mr-2 text-haip-light" />
        Fertigkeiten
      </h2>
      <h3 className="font-bold pt-2">Technical</h3>
      <p className="text-sm">HTML / CSS / SCSS</p>
      <p className="text-sm">Bootstrap / Tailwindcss</p>
      <p className="text-sm">Javascript / React / Next</p>
      <p className="text-sm">PHP / Coldfusion</p>
      <p className="text-sm">Node.js</p>
      <p className="text-sm">SQL</p>
      <h3 className="font-bold pt-2">Professional</h3>
      <p className="text-sm">Kommunikativ</p>
      <p className="text-sm">Scrum / Kanban</p>
      <p className="text-sm">Team Player</p>
      <p className="text-sm">Problemlöser</p>
      <p className="text-sm">Ansprechpartner</p>
    </div>
  );
}
