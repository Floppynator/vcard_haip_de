import React from "react";
import ReactDOM from "react-dom";
import Awards from "./components/awards";
import Header from "./components/header";
import Interests from "./components/interests";
import Langauages from "./components/langauges";
import Skills from "./components/skills";
import { Contact } from "./components/contact";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import WorkExperience from "./components/workexperiences";
import Footer from "./components/footer";

ReactDOM.hydrate(
  <React.StrictMode>
    <div className="flex flex-col w-full justify-center items-center bg-gray-200 text-gray-600">
      <div className="max-w-5xl w-full bg-white my-10 p-10 rounded-lg shadow-2xl">
        <div className="justify-center flex flex-col md:flex-row border-b pb-4 mb-4 border-gray-100">
          <div className="md:w-2/3 md:border-r-2 mr-4 md:border-gray-100">
            <Header />
          </div>
          <div className="md:w-1/3 flex justify-start pt-4 md:pt-0">
            <Contact />
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3 border-b-2 md:border-b-0 md:border-r-2 md:mr-4 border-gray-100">
            <WorkExperience />
          </div>
          <div className="flex flex-col pt-4 md:w-1/3 space-y-4">
            <Awards />
            <Skills />
            <Langauages />
            <Interests />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
