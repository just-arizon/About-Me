
import './App.css';
import Homepage from './Homepage';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Experience from "./pages/Experience";


function App() {
  return (
  <BrowserRouter>
    <Routes>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />} />
        </Routes>
</BrowserRouter>
  );
}

export default App;
