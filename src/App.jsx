import ButtonGradient from "../src/assets/svg/ButtonGradient";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Grid from "./components/Grid";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Approach from "./components/Approach";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="px-6 pt-[4.75rem] lg:pt-[5.25rem] overflow-clip">
        <Header />
        <Hero />
        <Grid />
        <Benefits />
        <Collaboration />
        <Approach />
        <Pricing />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
