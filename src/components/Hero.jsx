import Section from "./Section";
import Button from "./Button";
import { new_juvou_cropped } from "../assets";
import { updatecurve } from "../assets";

const Hero = () => {
  return (
    <Section
      className="pt-[12rem] lg:pt-[12.5rem] xl:pt-[13.5rem]"
      crosses
      id="hero"
    >
      <div className="container relative">
        <div className="relative z-1 text-center mx-auto mb-[4rem] md:mb-20 lg:mb:[6rem]">
          <img
            className="inline-block mb-12"
            src={new_juvou_cropped}
            alt="Juvou"
            width={500}
          />
          <h1 className="font-now h3 mb-6 -mt-2 uppercase">
            Shaping Ideas Into{" "}
            <span className="inline-block relative">
              Strategies
              <img
                src={updatecurve}
                className="absolute top-full left-0 w-full xl:mt-0.25"
                width={424}
                height={28}
                alt="curve"
              />
            </span>
          </h1>
          {/* ------------------------------------------------------------------------------------------------------------------------------------- */}
          <Button href="#contact" className="mt-10">
            Talk to Us
          </Button>
        </div>

        <div className="relative "></div>
      </div>
    </Section>
  );
}

export default Hero;