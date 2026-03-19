import React, { useState, useRef, useEffect } from "react";
import MacWindow from "./MacWindow";
import "./cli.scss";

const Cli = ({ windowName, windowsState, setWindowsState }) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    "Welcome to React Terminal",
    "Type 'help' to get started",
  ]);

  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const commands = {
    about: () =>
      `Kshitiz Rawat
Full-Stack Developer (CSE Undergraduate)

Focused on building scalable web applications.`,

    skills: () =>
      `Languages: JavaScript, Python
Frontend: React, HTML, CSS
Backend: Node.js, Express
Databases: MongoDB, MySQL`,

    projects: () =>
      `portfolio/
ecommerce-app/
chat-app/
task-api/`,

    contact: () =>
      `Email: kshitizrawat93@gmail.com
GitHub: github.com/Rwtchinu007`,

    help: () =>
      `Commands:
about  skills  projects
contact  clear`,

    clear: () => {
      setHistory([]);
      return "";
    },
  };

  const handleCommand = (cmd) => {
    const command = cmd.trim().toLowerCase();

    if (commands[command]) {
      const output = commands[command]();

      if (command !== "clear") {
        setHistory((prev) => [...prev, `kshitiz@mac ~ % ${cmd}`, output]);
      }
    } else {
      setHistory((prev) => [
        ...prev,
        `kshitiz@mac ~ % ${cmd}`,
        `command not found: ${cmd}`,
      ]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    }
  };

  return (
    <MacWindow
      windowName={windowName}
      windowsState={windowsState}
      setWindowsState={setWindowsState}
      width="54vw"
      height="52vh"
    >
      <div className="cli-wrapper" onClick={() => inputRef.current.focus()}>
        {history.map((line, i) => (
          <div key={i} className="cli-line">
            {line}
          </div>
        ))}

        <div className="cli-input-line">
          <span className="prompt">kshitiz@mac ~ %</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="cli-input"
          />
        </div>

        <div ref={bottomRef} />
      </div>
    </MacWindow>
  );
};

export default Cli;
