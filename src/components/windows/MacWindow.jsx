import React from "react";
import { Rnd } from "react-rnd";
import "./window.scss";

const MacWindow = ({ children,width="40vw",height="50vh",windowName,windowsState,setWindowsState }) => {
  return (
    <Rnd default={{
      width: width,
      height: height,
      x:33,
      y:53
    }}>
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div
            onClick={() => {
              if (setWindowsState && windowName) {
                setWindowsState((state) => ({ ...state, [windowName]: false }));
              }
            }}
            className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <div className="title">
            <p>kshitizrawat - zsh</p>
          </div>
        </div>
        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
