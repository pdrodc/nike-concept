import "./App.css";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Sports from "./components/sports/sports";
import Timeline from "./components/timeline/timeline";
import Map from "./components/map/map";
import About from "./components/about/about";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Timeline />
      <Sports />
      <Map /> 
      <About />
      <Footer />
    </>
  );
}

export default App;
