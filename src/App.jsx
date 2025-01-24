import ButtonGradient from "../src/assets/svg/ButtonGradient";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Grid from "./components/Grid";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";

const App = () => {
  return (
    <>
      <div className="px-6 pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Grid />
        <Benefits />
        <Collaboration />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
