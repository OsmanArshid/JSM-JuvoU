import Section from "./Section";
import {smallSphere, stars} from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import {LeftLine, RightLine} from "./design/Pricing";

const Pricing = () => {
  return (
    <Section id="pricing" className="overflow-hidden -mt-16">
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

        <div>
            
        </div>
      </div>
      {/* Affordable, Like Your Netflix Plan.... Because Ads Don’t Need Gucci.... Scaling Dreams, Not Bills */}
    </Section>
  );
}

export default Pricing