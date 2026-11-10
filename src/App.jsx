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
        <div className="min-h-screen bg-[#111110] text-[#E8E0D6] flex items-center justify-center relative">
          <h1 className="text-5xl font-head">
            HellKeyes
          </h1>
          <button className="enter-btn text-2xl absolute bottom-20 font-head" onClick={changePage}>Enter</button>
        </div>
    ) : (
      <Home />
    )}
    </>
  )
}

export default App
