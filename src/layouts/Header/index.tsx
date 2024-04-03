import Link from "next/link";
import { FiSearch } from "react-icons/fi";

import { useSearchContext } from "@/app/contexts/SearchProvider";
import { useState } from "react";
import Image from "next/image";

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  const { searchQuery, setSearchQuery } = useSearchContext();
  const [inputValue, setInputValue] = useState('');
  

  const handleInputChange = (event: any) => {
    const { value } = event.target;
    setInputValue(value);
  };

  const handleSearch = () => {
    setSearchQuery(inputValue);
    // Perform any other search-related actions here
  };

  return (
    <header className="dark:bg-boxdark top-0 z-40 flex w-full bg-white justify-between shadow-md dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between gap-x-6 py-4 px-2">
        <div className="mx-6 text-xl font-bold hidden bg-white sm:block ">Moderation Portal</div>
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="border-stroke dark:border-strokedark dark:bg-boxdark z-50 block rounded-sm border bg-white p-1.5 shadow-sm lg:hidden"
          >
            <span className="relative block h-5 w-5 cursor-pointer">
              <span className="du-block absolute right-0 h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "!w-full delay-300"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "delay-400 !w-full"
                  }`}
                >
                  {" "}
                </span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "!w-full delay-500"
                  }`}
                ></span>
              </span>
              <span className="absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "!h-0 !delay-[0]"
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "!h-0 !delay-200"
                  }`}
                ></span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}

          
         
        </div>
        <div className="block bg-white lg:hidden">
        <Link href="#" onClick={() => window.location.reload()}>
          <p className="cursor-pointer items-center font-bold ">
            
          </p>
        </Link>
        </div>
        <div className="hidden bg-white sm:block ">
          <div className="flex items-center border border-spacing-1 rounded-lg p-2">
            <button>
              <FiSearch />
            </button>

            <input
              type="text"
              placeholder="Type to search..."
              className="flex-1 border-0 bg-transparent pl-4 pr-4 font-medium focus:border-0 focus:outline-none focus:ring-0"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch()
                }
              }}
            />

            <button className="rounded-lg bg-slate-700 px-4 py-2 text-white"
            onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
        <div className="2xsm:gap-7 flex items-center gap-3 mr-6">
          <ul className="2xsm:gap-4 flex items-center gap-2"></ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
