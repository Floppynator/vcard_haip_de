import React from "react";
import Gravatar from "react-gravatar";

export default function Header() {
  return (
    <div className="flex flex-row w-full">
      <div className="w-20 flex-shrink-0">
        <Gravatar
          email="christian@haip.de"
          size={150}
          className=" rounded-full shadow-lg"
        />
      </div>
      <div className="flex flex-col pl-8">
        <span className="text-3xl md:text-4xl font-extrabold uppercase">
          Christian Haip
        </span>
        <span className="text-xl text-haip-light">
          Senior Software Developer
        </span>
      </div>
    </div>
  );
}
