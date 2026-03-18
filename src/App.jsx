import React from 'react'
import './app.scss'
import Dock from './components/Dock'
import Nav from './components/Nav'
import Github from './components/windows/Github'
import Note from './components/windows/Note'
import Resume from './components/windows/Resume'
// Install sass before using scss files
const App = () => {
  return (
    <main>
      <Nav/>
      <Dock/>
      <Github/>
      <Note/>
      <Resume/>
    </main>
  )
}

export default App