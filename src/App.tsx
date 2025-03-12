import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Aboutus from "./pages/Aboutus"
import Services from "./pages/Services"

function App() {
  return (
    <div className="max-w-screen overflow-hidden">
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<Aboutus />} />
    <Route path='/services' element={<Services />} />
  </Routes>
  </div>
  )
}

export default App