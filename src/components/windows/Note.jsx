import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
// import notes from "../../assets/note.txt?";
import MacWindow from "./MacWindow";
import "./notes.scss";

const Note = ({ windowName, setWindowsState, windowsState }) => {
  const [markdown, setMarkdown] = useState(null);
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}note.txt`)
      .then((response) => response.text())
      .then((data) => setMarkdown(data));
  }, []);
  return (
    <MacWindow
      windowName={windowName}
      windowsState={windowsState}
      setWindowsState={setWindowsState}
      width="48vw"
      height="62vh"
    >
      <div className="note-window">
        {markdown ? (
          <SyntaxHighlighter
            language="typescript"
            style={nightOwl}
            wrapLines={true}
            wrapLongLines={true}
          >
            {markdown}
          </SyntaxHighlighter>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </MacWindow>
  );
};

export default Note;
