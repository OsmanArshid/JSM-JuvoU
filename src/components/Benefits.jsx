import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
//import PlusSvg from "../assets/svg/PlusSvg";

const Benefits = () => {
  return (
    <Section id="services">
      <div className="max-w-[77.5rem] py-[114px] px-6 md:px-6 lg:px-10 xl:max-w-[97.5rem] relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl text-center"
          title="Market Smarter, Not Harder with JuvoU"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.5rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="ml-5 mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>

      {/* <>
        <div className="hidden absolute top-[80.25rem] left-2 right-2 h-0.25 bg-n-6 pointer-events-none xl:block" />

        <PlusSvg className="hidden absolute top-[79.9375rem] left-[0.175rem] z-2 pointer-events-none xl:block" />

        <PlusSvg className="hidden absolute top-[79.9375rem] right-[0.18rem] z-2 pointer-events-none xl:block" />
      </> */}
    </Section>
  );
};

export default Benefits;
