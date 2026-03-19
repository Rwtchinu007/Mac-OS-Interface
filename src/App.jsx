import React from "react";
import { useState } from "react";
import "./app.scss";
import Dock from "./components/Dock";
import Nav from "./components/Nav";
import Github from "./components/windows/Github";
import Note from "./components/windows/Note";
import Resume from "./components/windows/Resume";
import Calender from "./components/windows/Calender";
import Spotify from "./components/windows/Spotify";
import Cli from "./components/windows/Cli";
import Mail from "./components/windows/Mail";
// Install sass before using scss files
const App = () => {
  const [windowsState, setWindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    calender: false,
    spotify: false,
    cli: false,
    mail: false,
  });
  return (
    <main>
      <Nav />
      <Dock windowsState={windowsState} setWindowsState={setWindowsState} />
      {windowsState.github && (
        <Github
          windowName="github"
          windowsState={windowsState}
          setWindowsState={setWindowsState}
        />
      )}
      {windowsState.note && (
        <Note
          windowName="note"
          windowsState={windowsState}
          setWindowsState={setWindowsState}
        />
      )}
      {windowsState.resume && (
        <Resume
          windowName="resume"
          windowsState={windowsState}
          setWindowsState={setWindowsState}
        />
      )}
      {windowsState.calender && (
        <Calender
          windowName="calender"
          windowsState={windowsState}
          setWindowsState={setWindowsState}
        />
      )}
      {windowsState.spotify && (
        <Spotify
          windowName="spotify"
          windowsState={windowsState}
          setWindowsState={setWindowsState}
        />
      )}
      {windowsState.cli && (
        <Cli
          windowName="cli"
          windowsState={windowsState}
          setWindowsState={setWindowsState}
        />
      )}
      {windowsState.mail && (
        <Mail
          windowName="mail"
          windowsState={windowsState}
          setWindowsState={setWindowsState}
        />
      )}
    </main>
  );
};

export default App;
