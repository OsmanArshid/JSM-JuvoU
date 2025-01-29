
import { Routes, Route } from "react-router-dom";
import ButtonGradient from "../src/assets/svg/ButtonGradient";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Grid from "./components/Grid";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Approach from "./components/Approach";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Contact from "./components/Contact"; 

const App = () => {
  return (
    <>
      <Header /> {/* Header is outside Routes */}
      <ButtonGradient />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <div className="px-6 pt-[4.75rem] lg:pt-[5.25rem] overflow-clip">
                <Hero />
                <Grid />
                <Benefits />
                <Collaboration />
                <Approach />
                <Pricing />
                <Footer />
              </div>
            </>
          }
        />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
