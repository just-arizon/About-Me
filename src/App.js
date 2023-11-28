
import './App.css';
import Homepage from './Homepage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Experience from "./pages/Experience";


function App() {
  return (
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Homepage />}>
    <Route index element={<Homepage />} />
      <Route path='projects' element={<Projects />} />
      <Route path='experience' element={<Experience />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="resume" element={<Resume />} />
    </Route>
  </Routes>
</BrowserRouter>
  );
}

export default App;
