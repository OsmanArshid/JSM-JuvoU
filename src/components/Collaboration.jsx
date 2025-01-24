import Section from "./Section";
import { collabContent } from "../constants";
import { check } from "../assets";
import { updatecurve } from "../assets";

const Collaboration = () => {
    return (
      <Section>
        <div className="-mt-[177px] container lg:flex">
          <div className="max-w-[30rem]">
            <h2 className="text-center h2 mb-4 md:mb-8">
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

            <ul className="mb-10 md:mb-14 max-w-[22rem]">
              {collabContent.map((item) => (
                <li key={item.id}
                    className="mb-3 py-3">
                  <div className="flex items-center">
                    <img 
                      src={check} 
                      width={24} 
                      height={24}
                      alt="check" />
                    
                    <h6 className="body-2 ml-3">{item.title}</h6>
                  </div>
                  {item.text && (
                    <p className="body-2 mt-3 text-n-4">{item.text}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    );
};

export default Collaboration;