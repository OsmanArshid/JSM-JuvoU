import Section from "./Section";
import Button from "./Button";
import Notification from "./Notification";

import { new_juvou_cropped } from "../assets";
import { updatecurve } from "../assets";
import { BackgroundCircles, BottomLine } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";



const Hero = () => {

  const parallaxRef = useRef(null);
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.65rem] translate-x-1/2"
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 text-center mx-auto mb-[4rem] md:mb-20 lg:mb:[6rem]">
          <img
            className="inline-block mt-6 mb-[48px]"
            src={new_juvou_cropped}
            alt="Juvou"
            width={560}
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
          <Button href="/contact" className="mt-[105px]">
            Talk to Us
          </Button>
        </div>

        <BackgroundCircles />

        <div className="relative max-w-[23rem] mx-auto md:max-w-4xl xl:mb-20">
          <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
            
            

            <ScrollParallax isAbsolutelyPositioned>
              <ul className="hidden absolute -left-[5.5rem] bottom-[12.8rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                {heroIcons.map((icon, index) => (
                  <li className="p-5" key={index}>
                    <img src={icon} width={24} height={25} alt={icon} />
                  </li>
                ))}
              </ul>
            </ScrollParallax>

            <ScrollParallax isAbsolutelyPositioned>
              
              <Notification
                className="hidden absolute -right-[5.5rem] bottom-[15rem]
                w-[18rem] xl:flex"
                title="Digital Marketing"
              />
            </ScrollParallax>
          </div>

          {/* <Gradient /> */}
        </div>
      </div>

      <BottomLine />
    </Section>
  );
};
export default Hero;