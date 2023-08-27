import { menuitems } from "./menuitems";
import dynamic from "next/dynamic";
import Link from "next/link";
import { BsFillPersonFill } from "react-icons/bs";

const Menuitems = dynamic(() => import("../components/Menuitems"), {
  ssr: false,
});

function Navbar() {
  return (
    <div>
      <nav className="bg-neutral-900 fixed top-0 lg:py-4 py-3 w-full z-10 lg:flex block lg:justify-between border-b-[0.01px] border-neutral-700/80">
        <ul className="lg:flex block space-x-4 lg:mx-8">
          {menuitems.map((item, index) => (
            <Menuitems item={item} key={index} />
          ))}
        </ul>
        <button className="w-[30px] h-[30px] rounded-[50%] hover:opacity-75 flex justify-center bg-neutral-500 items-center mr-2">
          <Link href={"/account"}>
            <BsFillPersonFill size={20} />
          </Link>
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
