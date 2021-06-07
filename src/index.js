import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.hydrate(
  <React.StrictMode>
    <div className="max-h-screen h-screen flex justify-center items-center bg-gray-100">
      <div className="font-semibold text-5xl font-mono flex flex-col">
        Hello World.
        <span className="text-sm text-gray-500">
          This is the code you're looking for.
        </span>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
