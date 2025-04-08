import React from "react";
const StyledHeading = ({ styledHeadingData, style }) => {
  return (
    <>
      <h2
        className={`text-4xl sm:text-5xl text-[#1C1C1C] font-light text-center mb-8 sm:mb-10 ${
          style && style
        }`}
      >
        {[styledHeadingData?.mainHeading, styledHeadingData?.mainHeading2, styledHeadingData?.mainHeading3]
          .filter(Boolean)
          .map((item, index) => {
            return (
              <span
                key={index}
                className={`${item?.color === "Red" && "text-[#CA1F34]"} ${
                  item?.breakLine && "breakline"
                } font-light`}
              >
                &nbsp;{item.heading}&nbsp;
              </span>
            );
          })}
      </h2>
    </>
  );
};

export default StyledHeading;
