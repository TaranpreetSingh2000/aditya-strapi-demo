import Image from "next/image";
import Link from "next/link";

const Header = ({headerData}) => {
 
  return (
    <header className="bg-white shadow-xs md:shadow-sm ">
      <div className="header-container flex items-center w-full">
        {/* Logo Section */}
        <div className="flex items-center justify-center w-60 md:w-[14%]">
          <Link href="/" aria-label="Homepage">
          <img src={process.env.NEXT_PUBLIC_API_URL + headerData?.logo[0]?.url} alt={headerData?.alternativeText}  width={130} height={30} className="object-cover"/>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav
          className="links-container bg-[#c91429] px-3 md:px-6 py-3 w-full md:w-[86%] flex justify-center md:justify-between items-center rounded-bl-2xl"
          aria-label="Main Navigation"
        >
          <ul className="hidden md:flex space-x-8 max-md:text-sm text-white">
            {headerData?.nav.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.url}
                  target={item.openInNewTab ? '_blank': '_self'}
                  className={` ${item.active ? "text-white " : "text-gray-200"} hover:underline`}
                  aria-label={item}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Call-to-Action Buttons */}
          <div className="redirection-links flex gap-2">
            <button
              className="flex items-center uppercase text-[11px] md:text-xs font-bold text-white px-3 py-1 md:px-5 md:py-1.5 border-2 border-white rounded-full hover:bg-white hover:text-red-700 transition-all"
              aria-label="Ask an Expert"
            >
              {headerData.cta[0].title}
            </button>
            <button
              className="flex items-center uppercase text-[11px] md:text-xs font-bold text-red-700 px-3 py-1 md:px-4 md:py-1.5 border-2 border-white bg-white rounded-full hover:bg-red-700 hover:text-white transition-all"
              aria-label="Get Started"
            >
                {headerData.cta[1].title}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <nav
        className="md:hidden p-4 border border-gray-300"
        aria-label="Mobile Navigation"
      >
        <ul className="flex flex-wrap justify-center items-center space-x-6 text-sm text-gray-700">
          {headerData?.nav.map((item, index) => (
            <li key={index}>
              <Link href="#" className="hover:underline" aria-label={item}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
