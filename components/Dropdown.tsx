"use client";
import Link from "next/link";
import { MenuProps } from "./menuitems";
import { usePathname } from "next/navigation";
interface Drop {
  submenu: MenuProps[];
  dropdown: boolean;
  activeLink?: string;
}

function Dropdown({ submenu, dropdown }: Drop) {
  const router = usePathname();
  const currentLink = router.substring(0);
  return (
    <ul
      className={`dropdown absolute bg-neutral-900 p-2 rounded top-[20px] ${
        dropdown ? "block" : "hidden"
      }`}
    >
      {submenu.map((menu, index) => (
        <li key={index} className="menu-items">
          <Link
            href={menu.url}
            className={`hover:text-white ${
              menu.url == currentLink ? "text-white" : "text-blue-500"
            }`}
          >
            {menu.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Dropdown;
