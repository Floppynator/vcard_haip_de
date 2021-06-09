import React from "react";
import Experience from "./experience";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function WorkExperience() {
  return (
    <div className="flex flex-col">
      <h2 className="mb-2 text-xl font-bold text-haip-dark uppercase">
        <FontAwesomeIcon icon={faBuilding} className="mr-2 text-haip-light" />
        Werdegang
      </h2>
      <Experience
        first="true"
        title="Agiler Software Entwickler DevOps"
        subtitle="Denic-Services GmbH & Co. KG | 07/2020 - aktuell"
        tasks={[
          "Programmierung von internen und externen Tools",
          "Überwachung und Administration, Escrow Services",
          "Verifizierungsplattform: Design und Programmierung",
        ]}
      />

      <Experience
        title="Senior Anwendungsentwickler"
        subtitle="Hays AG | 04/2010 - 06/2020"
        tasks={[
          "Programmierung interner und externer Tools",
          "Koordinierung von Projekten und Agenturen",
          "Agile Zusammenarbeit mit E-Marketing und diversen weiteren Fachabteilungen",
          "SEO, Planung und Entwicklung der Unternehmenswebseite im DACH Bereich",
          "Tätigkeiten im SCRUM-Umfeld",
          "Integration und Einrichtung von A/B-Tests sowie Heatmaps zur Auswertung der Besucherdaten",
          "Google Analytics-Integration",
          "UX/UI der Unternehmenswebseite planen und umsetzen",
        ]}
      />

      <Experience
        title="IT Kreditadmin, Junior / Developer PHP"
        subtitle="Creditweb Deutschland GmbH | 11/2007 - 01/2010"
        tasks={[
          "Betreuung und Pflege von Bankkonditionen",
          "Erstellung von automatisierten Druckdokumenten",
          "Design von Formularen und Vorlagen",
          "Unternehmenswebseite: Konzeption und Umsetzung",
          "Kundendatenschutz",
        ]}
      />

      <Experience
        title="Fullstack Anwendungsentwickler"
        subtitle="TIXELmedia GmbH | 01/2006 - 08/2007"
        tasks={[
          "Entwicklung / Ausbau eines CMS",
          "Erstellung eines Community Foto Portals",
          "Erstellen kundenspezifischer Webseiten und Anbindung an eigenes CMSschutz",
          "Entwicklung eines Online Shops und Anbindung an eigenes CMS",
          "Telefonischer Kundenservice",
          "Netzwerk- und Servertechnik",
        ]}
      />

      <Experience
        title="Fullstack Anwendungsentwickler"
        subtitle="Trionic Technologies GmbH | 04/2004 - 07/2005"
        tasks={[
          "Entwicklung eines CMS auf PHP-Basis",
          "Erstellung kundenspezifischer Webseiten und Anbindung an eigenes CMS",
          "Telefonischer Kundenservice",
        ]}
      />

      <Experience
        title="Stellvertretender Filialleiter"
        subtitle="Atelco Computer Event GmbH | 03/2001 - 05/2002"
        tasks={[
          "Aufrüstung und Reparatur von PC Systemen",
          "Installation von Betriebssystemen und Software",
          "Fachberatung",
          "Verkauf von individuellen PC Systemen",
          "Warenwirtschaft",
          "Personalverantwortung",
          "Vertretung des Filialleiters",
        ]}
      />
    </div>
  );
}
