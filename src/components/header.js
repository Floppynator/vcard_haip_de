import React from "react";
import Gravatar from "react-gravatar";

export default function Header() {
  return (
    <div className="flex flex-row w-full">
      <Gravatar
        email="christian@haip.de"
        size={150}
        className="rounded-full shadow-lg"
      />
      <div className="flex flex-col pl-8">
        <span className="text-5xl font-extrabold uppercase">
          Christian Haip
        </span>
        <span className="text-xl text-haip-light">
          Senior Software Developer
        </span>
      </div>
    </div>
  );
}
