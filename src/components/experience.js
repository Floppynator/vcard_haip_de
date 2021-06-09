import React from "react";

export default function Experience(props) {
  console.log("TASKS", props.tasks);
  return (
    <div className="pb-8">
      <h3 className="text-2xl flex flex-col ">
        {props.title}
        <span className="text-sm text-haip-light">{props.subtitle}</span>
      </h3>
      <div className="px-4 py-4">
        <div className="flex flex-col space-y-1">
          {props.tasks.map((task) => (
            <p className="border-l-2 border-haip-light pl-2">{task}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
