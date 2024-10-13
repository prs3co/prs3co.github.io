import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import { DarkModeContext } from "./context/ThemeContext";
import { useContext } from "react";

function App() {
  const { isDarkMode } = useContext(DarkModeContext)
  return (
    <div className={`transition-colors duration-200 ${isDarkMode && 'dark'} bg-whitesoft-500 dark:bg-darkblue-500`}>
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
