import React from 'react'
import MacWindow from './MacWindow'
import './spotify.scss'

const Spotify = ({ windowName, setWindowsState, windowsState }) => {
  return (
    <MacWindow windowName={windowName} windowsState={windowsState} setWindowsState={setWindowsState} width="30vw" height="60vh">
      <div className="spotify-window">
        <iframe
          src="https://open.spotify.com/embed/playlist/0EPFUQkeFZlssY9lHF75go?utm_source=generator&theme=0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="spotify-iframe"
        ></iframe>
      </div>
    </MacWindow>
  )
}

export default Spotify