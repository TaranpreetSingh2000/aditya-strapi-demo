"use client"
import { useState } from "react";
const FooterDisclaimer = ({footerDisclaimerData}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  }
  
  return (
    <>
      <section className={`${isOpen && "bg-[#fffbf0] border-t border-gray-200"} `}>
          <button
          id="footer-disclaimer"
            aria-expanded={isOpen}
            aria-controls="footer-disclaimer"
            onClick={toggleOpen}
            className="w-full flex justify-between items-center text-[#1C1C1C] transition-all cursor-pointer px-4 py-2 md:px-10 lg:px-20"
          >
            <span className="text-gray-800 max-md:text-xs font-semibold">
              {footerDisclaimerData?.disclaimer?.heading}
            </span>
            <span className="relative w-6 h-6 flex items-center justify-center">
              <span className="absolute w-4 h-[2px] bg-gray-600"></span>
              <span
                className={`absolute h-4 w-[2px] bg-gray-600 transition-transform duration-500 ${
                  isOpen ? "rotate-90" : "rotate-0"
                }`}
              ></span>
            </span>
          </button>
          <section
            id="footer-disclaimer"
            role="region"
            aria-hidden={!isOpen}
            className={`overflow-hidden transition-all px-4 md:px-10 lg:px-20 duration-700 ease-in-out ${
              isOpen ? "h-fit opacity-100 md:pb-4 md:pt-2 pt-1 pb-3" : "h-0 opacity-0"
            }`}
          >
            <div className="md:max-w-4xl text-xs flex flex-col md:gap-2 gap-1 w-full">
              <p className="text-gray-700 font-medium">
              {footerDisclaimerData.disclaimer.description}
              </p>
            </div>
          </section>
        
      </section>
    </>
  );
};

export default FooterDisclaimer;
