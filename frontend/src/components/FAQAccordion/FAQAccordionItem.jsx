import { useState } from "react"

const FAQAccordionItem = ({accordionItem}) => {
    const [isOpen, setIsOpen] = useState(false)
    
  return (
    <div
    className="bg-white rounded-lg overflow-hidden px-5 py-4 md:px-7 shadow-[0px_0px_14px_0px_rgba(53,53,53,0.04)]"
  >
    <button
      className="w-full flex justify-between items-center py-3 md:py-4 text-base sm:text-lg font-semibold text-[#1C1C1C] bg-white transition-all text-left cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      {accordionItem.heading}

      <span className="relative w-5 sm:w-6 h-5 sm:h-6 flex items-center justify-center">
        <span className="absolute w-4 sm:w-5 h-[2px] bg-gray-700"></span>
        <span
          className={`absolute h-4 sm:h-5 w-[2px] bg-gray-700 transition-transform duration-300 ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
        ></span>
      </span>
    </button>

    {/* Answer */}
    <div
      className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen
          ? "h-fit py-2 md:py-3 opacity-100"
          : "h-0 opacity-0"
      }`}
    >
      <p className="text-gray-600 text-sm sm:text-base text-left">
        {accordionItem.description}
      </p>
    </div>
  </div>
  )
}

export default FAQAccordionItem