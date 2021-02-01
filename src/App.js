import './App.css';
import Navbar from './Components/Navbar';
import About from './Sections/About';
import Education from './Sections/Education';
import Experience from './Sections/Experience';
import Projects from './Sections/Projects';
import Skills from './Sections/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
