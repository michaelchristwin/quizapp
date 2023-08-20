import Link from "next/link";
import { menuitems } from "./menuitems";
import dynamic from "next/dynamic";
import {} from "react-icons/";
const Menuitems = dynamic(() => import("../components/Menuitems"), {
  ssr: false,
});

function Navbar() {
  return (
    <div>
      <nav className="bg-neutral-900 fixed top-0 lg:py-4 py-3 w-full z-10 lg:flex block lg:justify-between">
        <ul className="lg:flex block space-x-4 lg:mx-8">
          {menuitems.map((item, index) => (
            <Menuitems item={item} key={index} />
          ))}
          <Link href={`/account`}>
            <p>jj</p>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
