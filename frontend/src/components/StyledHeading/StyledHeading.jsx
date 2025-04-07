import React from "react";
const StyledHeading = ({data,style}) => {

  return <>
      <h2 className={`text-4xl sm:text-5xl text-[#1C1C1C] font-light text-center mb-8 sm:mb-10 ${style && style}`}>
          {[
            data?.mainHeading,
            data?.mainHeading2,
            data?.mainHeading3,
          ]
            .filter(Boolean)
            .map((item, index) => {
              const HeadingTag = item.breakLine ? "div" : React.Fragment;
              const key = `heading-${index}`;

              return (
                <span key={key} className={`${item?.color === "Red" && 'text-[#CA1F34]'} ${item?.breakLine && 'breakline'} font-light`}>
                      &nbsp;{item.heading}&nbsp;
                    </span>
              );
            })}
        </h2>
  </>;
};

// export default StyledHeading;
