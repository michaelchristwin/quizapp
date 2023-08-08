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
  useEffect(() => {
    let currentLink = router.substring(1);
    setActiveLink(currentLink);
  }, [router]);
  return (
    <div className="relative">
      <li
        className={`lg:block hidden hover:text-white ${
          activeLink === item.url ? "text-white" : "text-blue-500"
        }`}
      >
        {item.submenu ? (
          <>
            <button type="button" aria-haspopup="menu">
              <Link href={item.url} className="nav-link">
                {item.title}
              </Link>
            </button>
            <Dropdown submenu={item.submenu} />
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
