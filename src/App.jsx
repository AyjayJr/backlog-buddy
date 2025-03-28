import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import Navbar from "./components/Navbar"
import Home from "./pages/Home"

function App() {
  return (
    <>
      <Router>
          {/* Navbar at the top */}
          <Navbar />
          {/* Main content */}
          <main className="flex-grow">
            <Routes>
              <Route path="" element={<Home />} />
              {/* <Route path="/game/:id" element={<GameDetails />} />
          <Route path="/backlog" element={<Backlog />} />
          <Route path="/about" element={<AboutMe />} /> */}
            </Routes>
          </main>
      </Router>
    </>
  )
}

export default App
