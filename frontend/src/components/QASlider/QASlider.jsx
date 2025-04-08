"use client"
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

const QASlider = ({sliderSectionData}) => {
  const swiperRef = useRef(null);
  return (
    <div className="max-w-full mx-auto py-10 px-4">
      {/* Section Heading */}
      <h2 className="text-2xl font-bold mb-6 text-center md:text-left">
        {sliderSectionData?.title}
      </h2>

      {/* Swiper Container */}
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ 
            clickable: true,
            el: ".swiper-pagination",
            renderBullet: (index, className) => `
              <span class="${className} custom-bullet"></span>
            `,
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            640: { slidesPerView: 1.25 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {sliderSectionData?.recentSlider.length>0 && sliderSectionData?.recentSlider.map((qa, index) => (
            <SwiperSlide key={index} className="!h-auto my-2">
              <div className="bg-white p-6 rounded-xl w-full h-full shadow-md ">
                <h3 className="text-md font-semibold mb-2">{qa?.sliderHeading}</h3>
                <p className="text-gray-600 text-sm">{qa?.sliderDescription}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination - Visible only on Mobile */}
        <div className="swiper-pagination md:hidden flex justify-center mt-4"></div>

        {/* Custom Navigation Buttons - Hidden on Mobile */}
        <div className="absolute bottom-[-77px] right-4 flex space-x-4">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="p-3 border border-red-600 rounded-full text-red-600 transition hover:bg-red-600 hover:text-white z-10 cursor-pointer"
          >
            <ChevronLeft size={20} />
           
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="p-3 border border-red-600 rounded-full text-red-600 transition hover:bg-red-600 hover:text-white z-10 cursor-pointer"
          >
            <ChevronRight size={20} />
           
          </button>
        </div>
      </div>

      {/* Button Below Slider - Centered in Mobile */}
      <div className="mt-8 flex" >
        <button className="bg-[#ca1f34] text-white px-6 py-4 rounded-full text-sm font-semibold">
          {sliderSectionData.cta.title}
        </button>
      </div>

      {/* Custom Pagination Styles */}
      <style>
        {`
          .custom-bullet {
            width: 12px;
            height: 12px;
            margin: 0 4px;
            border-radius: 50%;
            background-color: #d3d3d3;
            transition: all 0.3s ease;
          }
          .swiper-pagination{
            bottom: -60px !important;
            left: -110px !important;

          }
          .swiper-pagination-bullet-active {
            background-color: #c0392b !important; /* Red color */
            width: 50px !important;
            border-radius: 20px !important;
          }
        `}
      </style>
    </div>
  );
};

export default QASlider;
