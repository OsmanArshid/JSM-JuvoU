import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";
import { useState, useEffect } from "react";
import PlusSvg from "../assets/svg/PlusSvg";

const Pricing = () => {
  const [showLines, setShowLines] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowLines(window.innerWidth === window.screen.width);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Section id="pricing" className="-mt-16">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            className="relative z-1"
            src={smallSphere}
            width={255}
            height={255}
            alt="Fancy Sphere"
          />

          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              className="w-full"
              src={stars}
              width={950}
              height={400}
              alt="Night of Stars"
            />
          </div>
        </div>

        <Heading
          tag="Get Started with JuvoU"
          title="Pricing, Without Selling Your Kidney"
        />

        <div className="relative">
          <PricingList />
          {showLines && <LeftLine />}
          {showLines && <RightLine />}
        </div>
      </div>
      {/* Affordable, Like Your Netflix Plan.... Because Ads Don’t Need Gucci.... Scaling Dreams, Not Bills */}
      <div className="absolute left-2 right-2 mt-12 h-0.25 bg-n-6 pointer-events-none" />
      <PlusSvg className="hidden absolute left-[0.175rem] xl:bottom-7 lg:bottom-3 z-2 pointer-events-none lg:block" />
      <PlusSvg className="hidden absolute right-[0.18rem] xl:bottom-7 lg:bottom-3 z-2 pointer-events-none lg:block" />{" "}
    </Section>
  );
};

export default Pricing;


      // {/* Line */}
      // <div className="absolute left-2 right-2 mt-12 h-0.25 bg-n-6 pointer-events-none" />
      // {/* Left Plus Icon */}
      // <PlusSvg className="hidden absolute left-[0.175rem] -top-3 z-2 pointer-events-none md:block" />
      // {/* Right Plus Icon */}
      // <PlusSvg className="hidden absolute right-[0.18rem] -top-3 z-2 pointer-events-none md:block" />{" "}
