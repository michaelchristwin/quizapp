"use client";
import { menuitems } from "./menuitems";
import dynamic from "next/dynamic";
import { BsFillPersonFill } from "react-icons/bs";
import SideBar from "./Sidebar";
import { useState } from "react";

const Menuitems = dynamic(() => import("../components/Menuitems"), {
  ssr: false,
});

function Navbar() {
  const [sideOpen, setSideOpen] = useState(false);
  return (
    <div
      className={
        sideOpen
          ? "fixed top-0 left-0 w-full h-full bg-neutral-900/90 backdrop-blur z-[14]"
          : ""
      }
    >
      <nav className="bg-neutral-900 fixed top-0 lg:py-4 py-3 w-full z-10 lg:flex block lg:justify-between border-b-[0.01px] border-neutral-700/80">
        <ul className="lg:flex block space-x-4 lg:mx-8">
          {menuitems.map((item, index) => (
            <Menuitems item={item} key={index} />
          ))}
        </ul>
        <button
          className="w-[30px] h-[30px] rounded-[50%] hover:opacity-75 flex justify-center bg-neutral-500 items-center mr-2"
          onClick={() => setSideOpen((prevopen) => !prevopen)}
        >
          <BsFillPersonFill size={20} />
        </button>
      </nav>
      <SideBar className={sideOpen ? "block" : "hidden"} />
    </div>
  );
}

export default Navbar;
