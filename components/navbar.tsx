"use client";
import { NavbarItem } from "./navbar-item";
import { usePathname } from "next/navigation";

export const Navbar = ({ route }: any) => {
  const pathname = usePathname();
  return (
    <div className="sm:h-screen sm:w-24 h-20 w-screen flex justify-center sm:flex-col flex-row items-center sm:relative duration-300">
      {route.map((element: any, index: number) => (
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
