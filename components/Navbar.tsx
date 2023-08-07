"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function Navbar() {
  const router = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  useEffect(() => {
    let currentLink = router.substring(1);
    setActiveLink(currentLink);
    setIsOpen(false);
  }, [router]);

  return (
    <div>
      <nav className="bg-neutral-900 fixed top-0 lg:py-4 py-3 w-full z-10 lg:flex block lg:justify-between">
        <ul className="lg:flex block space-x-4 lg:mx-8">
          <li
            className={`lg:block hidden hover:text-white ${
              activeLink === "" ? "text-white" : "text-black"
            }`}
          >
            <Link href={`/`} className="nav-link">
              Home
            </Link>
          </li>
          <li
            className={`ml-4 lg:block hidden  hover:text-white ${
              activeLink === "book-a-session" ? "text-white" : "text-black"
            }`}
          >
            <Link href={`/book-a-session`} className="nav-link">
              Articles
            </Link>
          </li>
          <li
            className={`ml-4 lg:block hidden hover:text-white ${
              activeLink === "become-a-tutor" ? "text-white" : "text-black"
            }`}
          >
            <Link href={`/become-a-tutor`} className="nav-link">
              Tutorials
            </Link>
          </li>
          <li
            className={`ml-4 lg:block hidden hover:text-white ${
              activeLink === "become-a-tutor" ? "text-white" : "text-black"
            }`}
          >
            <Link
              target="_blank"
              href="http://blog.learnhall.com/"
              className="nav-link"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
