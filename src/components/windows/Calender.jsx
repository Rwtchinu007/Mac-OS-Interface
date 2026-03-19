import React from "react";
import MacWindow from "./MacWindow";
import "./calender.scss";
import { InlineWidget } from "react-calendly";

const Calender = ({ windowName, setWindowsState, windowsState }) => {
  return (
    <MacWindow
      windowName={windowName}
      windowsState={windowsState}
      setWindowsState={setWindowsState}
      width="62vw"
      height="74vh"
    >
      <div className="calender">
        <InlineWidget
          url="https://calendly.com/shit-iz-riyal007/let-s-connect"
          styles={{
            width: "100%",
            height: "100%",
          }}
          pageSettings={{
            backgroundColor: "1e1e1e", // dark background
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: "0ea5e9", // blue accent
            textColor: "ffffff", // white text
          }}
        />
      </div>
    </MacWindow>
  );
};

export default Calender;
