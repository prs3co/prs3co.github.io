import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import About from "./components/About";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      {/* <About /> */}
      <Skills />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
