import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import { PlatformContext } from './contexts/PlatformContext'
import { SortByContext } from './contexts/SortByContext'

import SearchBar from './components/shared/SearchBar/SearchBar'
import Home from './components/pages/Home/Home'
import AllGames from './components/pages/AllGames/AllGames'
import GameDetails from './components/pages/GameDetails/GameDetails'

import './App.scss'

// import reactLogo from './assets/images/react.svg'
function App() {

  const [platform, setPlatform] = useState("all");
  const [sortBy, setSortBy] = useState("relevance");

  return (
    <main>

      <PlatformContext.Provider value={{ platform, setPlatform }}>
        <SortByContext.Provider value={{ sortBy, setSortBy }}>
          <SearchBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/allgames" element={<AllGames />} />
            <Route path="/details/:id" element={<GameDetails />} />
          </Routes>
        </SortByContext.Provider>
      </PlatformContext.Provider>

      {/* <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <button>count is</button>
      <p>
        Edit <code>src/App.jsx</code> save to test
      </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </main>
  )
}

export default App
