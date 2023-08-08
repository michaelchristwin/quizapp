import Link from "next/link";
import { MenuProps } from "./menuitems";

interface Drop {
  submenu: MenuProps[];
}

function Dropdown({ submenu }: Drop) {
  return (
    <ul className="dropdown absolute bg-neutral-900 p-2 rounded top-[20px]">
      {submenu.map((menu, index) => (
        <li key={index} className="menu-items">
          <Link href={menu.url}>{menu.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Dropdown;
