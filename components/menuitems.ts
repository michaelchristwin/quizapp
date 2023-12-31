export interface MenuProps {
  title: string;
  url: string;
  submenu?: MenuProps[];
}

export const menuitems: MenuProps[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Articles",
    url: "/articles",
  },
  {
    title: "Tests",
    url: "#",
    submenu: [
      {
        title: "TOEIC",
        url: "/toeic",
      },
      {
        title: "ooooo",
        url: "ddhdhdh",
      },
    ],
  },
  {
    title: "Contact",
    url: "/contact",
  },
];
