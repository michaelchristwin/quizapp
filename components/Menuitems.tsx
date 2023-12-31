"use client";
import { MenuProps } from "./menuitems";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";

interface MenuitemsProps {
  item: MenuProps;
}

function Menuitems({ item }: MenuitemsProps) {
  const router = usePathname();
  const [activeLink, setActiveLink] = useState("home");
  const [dropdown, setDropdown] = useState<boolean>(false);

  useEffect(() => {
    let currentLink = router.substring(0);
    setActiveLink(currentLink);
    setDropdown(false);
  }, [router]);

  const drop = () => {
    if (item.submenu) {
      setDropdown((prevDrop) => !prevDrop);
    }
    return;
  };
  // console.log(activeLink);
  return (
    <div className="relative">
      <li
        className={`lg:block hidden ${
          !item.submenu ? "hover:text-white" : ""
        } ${activeLink === item.url ? "text-white" : "text-blue-500"}`}
      >
        {item.submenu ? (
          <>
            <button
              type="button"
              aria-haspopup="menu"
              onClick={drop}
              className="hover:text-white"
              aria-expanded={dropdown ? "true" : "false"}
            >
              {item.title}
            </button>
            <Dropdown submenu={item.submenu} dropdown={dropdown} />
          </>
        ) : (
          <Link href={item.url} className="nav-link">
            {item.title}
          </Link>
        )}
      </li>
    </div>
  );
}

export default Menuitems;
