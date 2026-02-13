import "./i18n";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tariffsandcampaign from "./components/Tariffsandcampaign";
import Xidmetleranderaziler from "./components/Xidmetleranderaziler";
import Odenis from "./components/Odenis";
import Muraciet from "./components/Muraciet";
import Melumat from "./components/Melumat";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Tariffsandcampaign />
      <Xidmetleranderaziler/>
      <Odenis />
      <Muraciet />
      <Melumat />
    </>
  );
}

export default App;
