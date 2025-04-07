"use client";
import React, { useState } from "react";
import FAQAccordionItem from "./FAQAccordionItem";
import StyledHeading from "../StyledHeading/StyledHeading";

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
        <StyledHeading data={faqSectionData[0].faqHeading}/>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqSectionData?.faqAccordion
            .slice(0, visibleCount)
            .map((faq, index) => (
              <FAQAccordionItem key={index} accordionItem={faq} />
            ))}
        </div>

        {/* Load More Button */}
        {visibleCount < faqSectionData?.faqAccordion.length && (
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
