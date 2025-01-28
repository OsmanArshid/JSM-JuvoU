import {pricing} from "../constants";
import Button from "./Button";
import { check } from "../assets";
import TagLine from "./design/TagLine";
import { FaLocationArrow } from "react-icons/fa6";

//changing one
const PricingList = () => {
  return (
    <div>
      <div className="flex gap-[2rem] flex-wrap justify-center">
        {pricing.map((item) => (
          <div
            key={item.id}
            className="max-lg:w-full lg:max-w-[350px] xl:max-w-[360px] h-full px-6 py-6 bg-n-8 border border-n-4 rounded-[2rem] lg:w-auto even:py-14 odd:py-6 odd:my-8  [&>h4]:first:text-n-2 [&>h4]:even:text-color-2 [&>h4]:last:text-n-2"
          >
            <h4 className="h4 mb-4">{item.title}</h4>
            <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
              {item.description}
            </p>
            <div className="flex items-center h-[5.5rem] mb-6">
              <>
                <div className="h3">PKR</div>
                <div className="ml-5 mt-1.5">
                  <TagLine
                    className={`leading-none font-bold text-color-1 
                               ${
                                 item.id === "0" || item.id === "2"
                                   ? "text-[2.2rem]"
                                   : "text-[1.6rem] text-center"
                               }`}
                  >
                    {item.price}
                  </TagLine>
                </div>
              </>
            </div>

            <ul>
              {item.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start py-5 border-t border-n-6"
                >
                  <img src={check} width={24} height={24} alt="Check" />
                  <p className="body-2 ml-4">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-14 w-full mb-6">
        <Button icon={<FaLocationArrow />} href="/contact" className="w-1/3 text-center leading-none">
          Price With Us
        </Button>
      </div>
    </div>
  );
}

export default PricingList

