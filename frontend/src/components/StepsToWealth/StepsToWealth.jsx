"use client";
import OverlappingCards from "../OverlappingCards/OverlappingCards";
// import hat from "../../../public/redHat.png";
import { useState, useEffect } from "react";
import StyledHeading from "../StyledHeading/StyledHeading";

const StepsToWealth = ({stepsToWealthData}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  
  return (
    <section className="w-full bg-[#F5F5F5] py-12 md:py-8">
      <div
        className={`w-full flex flex-col ${
          isTablet ? "items-center" : "md:flex-row items-start"
        } gap-0 px-6`}
      >
        <div
          className={`w-full ${
            isTablet ? "max-w-[600px]" : "md:w-[40%] lg:w-full"
          } flex flex-col gap-8 md:gap-12 items-center md:items-start`}
        >
         <StyledHeading styledHeadingData={stepsToWealthData?.roadmapHeading}/>

          {!isMobile && (
            <div className="w-full">
              <img
                src={process.env.NEXT_PUBLIC_API_URL+stepsToWealthData?.roadmapImage?.url}
                alt="Graduation Hat"
                width={498}
                height={250}
                className="mix-blend-darken object-cover w-full max-w-[498px]"               
              />
            </div>
          )}
        </div>

        <div
          className={`w-full ${
            isTablet ? "max-w-[700px] mt-8" : "md:w-[60%] md:mt-0"
          } flex justify-center`}
        >
          <OverlappingCards overlappingCardsData={stepsToWealthData?.roadmapCard}/>
        </div>
      </div>
    </section>
  );
};

export default StepsToWealth;
