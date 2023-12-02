
import './App.css';
import Homepage from './Homepage';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import TopNav from "./navigation/TopNav";

import BottomNav from "./navigation/BottomNav";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Experience from "./pages/Experience";


function App() {
  return (
  <BrowserRouter>
  <TopNav />
    <Routes>
          <Route index element={<Homepage />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="experience" element={<Experience />} />
          <Route path="resume" element={<Resume />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      <BottomNav />
</BrowserRouter>
  );
}

export default App;
