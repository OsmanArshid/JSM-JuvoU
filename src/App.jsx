import ButtonGradient from "../src/assets/svg/ButtonGradient";
import Grid from "./components/Grid";
//import Button from "./components/Button";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <div className="px-6 pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Grid />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
