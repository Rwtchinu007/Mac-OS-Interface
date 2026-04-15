import React from "react";
import "./dock.scss";

const Dock = ({ windowsState, setWindowsState }) => {
  const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`;

  return (
    <footer className="dock">
      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, github: true }));
        }}
        className="icon github"
      >
        <img src={assetPath("doc-icons/github.svg")} alt="" />
      </div>
      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, note: true }));
        }}
        className="icon note"
      >
        <img src={assetPath("doc-icons/note.svg")} alt="" />
      </div>
      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, resume: true }));
        }}
        className="icon pdf"
      >
        <img src={assetPath("doc-icons/pdf.svg")} alt="" />
      </div>
      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, calender: true }));
        }}
        className="icon calender"
      >
        <img src={assetPath("doc-icons/calender.svg")} alt="" />
      </div>
      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, spotify: true }));
        }}
        className="icon spotify"
      >
        <img src={assetPath("doc-icons/spotify.svg")} alt="" />
      </div>
      <div
        className="icon mail"
        onClick={() => {
          setWindowsState((state) => ({ ...state, mail: true }));
        }}
      >
        <img src={assetPath("doc-icons/mail.svg")} alt="" />
      </div>
      <div
        className="icon link"
        onClick={() => {
          window.open(
            "https://www.linkedin.com/in/kshitiz-rawat0806",
            "_blank",
          );
        }}
      >
        <img src={assetPath("doc-icons/link.svg")} alt="" />
      </div>
      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, cli: true }));
        }}
        className="icon cli"
      >
        <img src={assetPath("doc-icons/cli.svg")} alt="" />
      </div>
    </footer>
  );
};

export default Dock;
