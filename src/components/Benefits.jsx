import Section from "./Section";
import Heading from "./Heading";
import { BottomLine } from "./design/Hero";
import { benefits } from "../constants";

const Benefits = () => {
  return (
    <Section id="services">
      <BottomLine />

      <div className="container relative z-2">
        <Heading
          title="Market Smarter, Not Harder with JuvoU"
          className=" mt-8 md:max-w-md lg:max-w-2xl"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{ backgroundImage: `url(${item.backgroundUrl})` }}
              key={item.id}
            >
              <div>
                <h5>{item.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
