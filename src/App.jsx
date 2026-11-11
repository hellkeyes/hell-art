import './App.css'
import Home from './pages/Home';
import { useState } from 'react'

function App() {

  const[ currentPage, setCurrentPage ] = useState("intro");

  function changePage() {
    setCurrentPage("home");
  }

  return (
    <>
    {currentPage === "intro" ? (
        <div className="min-h-screen bg-[#111110] text-[#E8E0D6] flex flex-col items-center justify-center relative gap-5 font-head">
          <h1 className="text-5xl">
            HellKeyes
          </h1>
          <p>Paintings, journal? Idk but collection of my creation.</p>
          <button className="enter-btn text-2xl absolute bottom-20" onClick={changePage}>Enter</button>
        </div>
    ) : (
      <Home />
    )}
    </>
  )
}

export default App
