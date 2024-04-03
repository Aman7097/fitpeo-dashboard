"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { RiSettingsLine } from "react-icons/ri";
import { TbSquareKey } from "react-icons/tb";
import { PiUserSquare } from "react-icons/pi";
import { IoWallet } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { MdOutlineLiveHelp } from "react-icons/md";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();
  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = "true";
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-50   flex h-screen w-60 flex-col overflow-y-hidden bg-[#091241] px-3 py-6 duration-300 ease-linear md:w-[18%] md:px-5 lg:static lg:translate-x-0 dark:bg-gray-800 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between gap-2 px-6">
        <Link href="/" onClick={() => window.location.reload()}>
          <div className=" my-4  flex items-center gap-4 text-3xl font-bold text-white">
            <RiSettingsLine />
            Dashboard
          </div>
        </Link>
        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <IoChevronBackCircleOutline className="h-6 w-6 text-white" />
        </button>
      </div>

      {/* Navigation */}
      <ul className="my-6 flex flex-col gap-y-6">
        <li>
          <div className="z-2 flex items-center gap-4 rounded-lg bg-[#2D2C68] px-6 py-4 text-xl text-white">
            <TbSquareKey className="text-xl" />
            Dashboard
          </div>
        </li>

        <li>
          <div className="z-2 flex items-center gap-4 rounded-lg bg-blue-950 px-6 py-4 text-xl text-white">
            <PiUserSquare />
            Product
          </div>
        </li>

        <li>
          <div className="z-2 flex items-center gap-4 rounded-lg bg-blue-950 px-6 py-4 text-xl text-white">
            <PiUserSquare />
            Customers
          </div>
        </li>

        <li>
          <div className="z-2 flex items-center gap-4 rounded-lg bg-blue-950 px-6 py-4 text-xl text-white">
            <IoWallet />
            Income
          </div>
        </li>

        <li>
          <div className="z-2 flex items-center gap-4 rounded-lg bg-blue-950 px-6 py-4 text-xl text-white">
            <BiSolidOffer />
            Promote
          </div>
        </li>

        <li>
          <div className="z-2 flex items-center gap-4 rounded-lg bg-blue-950 px-6 py-4 text-xl text-white">
            <MdOutlineLiveHelp />
            Help
          </div>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
