import Section from "./Section";
import { collabApps, collabContent } from "../constants";
import { check, juvou } from "../assets";
import { updatecurve } from "../assets";
import Button from "./Button";

const Collaboration = () => {
    return (
      <Section>
        <div className="-mt-[177px] container lg:flex">
          <div className="max-w-[25rem]">
            <h2 className="h2 mb-4 md:mb-8">
              JuvoU for Seamless Business {""}
              <span className="inline-block relative">
                Success
                <img
                  src={updatecurve}
                  className="absolute top-full left-0 w-full xl:mt-0.25"
                  width={424}
                  height={28}
                  alt="curve"
                />
              </span>
            </h2>

            <ul className="mb-10 md:mb-14 max-w-[22rem] text-white">
              {collabContent.map((item) => (
                <li key={item.id} className="mb-3 py-3">
                  <div className="flex items-center">
                    <img src={check} width={24} height={24} alt="check" />

                    <h6 className="body-2 ml-3">{item.title}</h6>
                  </div>
                  {item.text && (
                    <p className="body-2 mt-3 text-n-3">{item.text}</p>
                  )}
                </li>
              ))}
            </ul>

            <Button>Talk To Us</Button>
          </div>

          <div className="mt-4">
            <p className="body-2 mb-4 text-n-3 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
              At JuvoU, we believe staying up-to date with all the softwares to
              make the work of Marketing a piece of Chocolate Cake
            </p>

            <div className="aspect-square border border-n-5 rounded-full -translate-x-1/2 scale:75 md:scale-100 left-1/2 relative flex w-[22rem]">
              <div className="aspect-square border border-n-5 rounded-full w-60 m-auto flex">
                <div className="bg-conic-gradient rounded-full p-[0.2rem] m-auto aspect-square w-[6.2rem]">
                  <div className="w-full h-full rounded-full flex items-center justify-center mr-[140px] bg-n-8">
                    <img src={juvou} width={90} height={68} alt="JuvoU" />
                  </div>
                </div>
              </div>

              <ul>
                {collabApps.map((app, index) => (
                  <li
                    key={app.id}
                    className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                      index * 45
                    }`}
                  >
                    <div
                      className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                        index * 45
                      }`}
                    >
                      <img
                        className="m-auto"
                        width={app.width}
                        height={app.height}
                        alt={app.title}
                        src={app.icon}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>
    );
};

export default Collaboration;