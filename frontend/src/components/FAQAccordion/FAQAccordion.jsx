"use client";
import React, { useState } from "react";
import FAQAccordionItem from "./FAQAccordionItem";

const FAQAccordion = ({ faqSectionData }) => {
  const [visibleCount, setVisibleCount] = useState(4); // Show 4 FAQs initially

  const loadMore = () => {
    setVisibleCount((prev) => prev + 4); // Show 4 more FAQs
  };

  return (
    <div
      className="py-24"
      // style={{backgroundImage: `url(${faqAccordionBgImage.src})`,backgroundSize:"cover"}}
    >
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl text-[#1C1C1C] font-light text-center mb-8 sm:mb-10">
          {[
            faqSectionData[0].faqHeading?.mainHeading,
            faqSectionData[0].faqHeading?.mainHeading2,
            faqSectionData[0].faqHeading?.mainHeading3,
          ]
            .filter(Boolean)
            .map((item, index) => {
              const HeadingTag = item.breakLine ? "div" : React.Fragment;
              const key = `heading-${index}`;

              return (
                <HeadingTag key={key} className="mb-2">
                  {item.color === "Red" ? (
                    <span className="text-[#CA1F34] font-light mb-2">
                      &nbsp;{item.heading}&nbsp;
                    </span>
                  ) : (
                    item.heading
                  )}
                </HeadingTag>
              );
            })}
        </h2>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqSectionData[0].faqAccordion
            .slice(0, visibleCount)
            .map((faq, index) => (
              <FAQAccordionItem key={index} accordionItem={faq} />
            ))}
        </div>

        {/* Load More Button */}
        {visibleCount < faqSectionData[0]?.faqAccordion.length && (
          <div className="flex justify-center mt-8 sm:mt-10">
            <button
              className="px-6 md:px-8 py-3 bg-[#ca1f34] cursor-pointer text-white font-semibold rounded-full hover:bg-[#ca1f36f8] transition-all"
              onClick={loadMore}
            >
              LOAD MORE
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export { FAQAccordion };
