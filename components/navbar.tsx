"use client";
import { FaRegLaughWink, FaRegObjectGroup } from "react-icons/fa";
import { NavbarItem } from "./navbar-item";
import { usePathname } from "next/navigation";
const ROUTE = [
  {
    text: "Me",
    path: "/",
    badge: "#",
    icon: <FaRegLaughWink size={18} />,
  },
  {
    text: "Portfolio",
    path: "/portfolio",
    icon: <FaRegObjectGroup size={18} />,
  },
];

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="sm:h-screen sm:w-24 h-20 w-screen flex justify-center sm:flex-col flex-row items-center sm:relative duration-300">
      {ROUTE.map((element, index) => (
        <NavbarItem
          key={`${index}-sidebar`}
          path={element.path}
          icon={element.icon}
          text={element.text}
          active={element.path === pathname}
        />
      ))}
    </div>
  );
};
