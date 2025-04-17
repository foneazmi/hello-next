"use client";
import { NavbarItem } from "./navbar-item";
import { usePathname } from "next/navigation";

interface RouteItem {
  path: string;
  icon: React.ReactNode;
  text: string;
}

interface NavbarProps {
  routes: RouteItem[];
}

export const Navbar = ({ routes }: NavbarProps) => {
  const pathname = usePathname();

  return (
    <nav className="h-20 w-screen flex flex-row items-center justify-center sm:h-screen sm:w-24 sm:flex-col sm:relative duration-300">
      {routes.map((route, index) => (
        <NavbarItem
          key={`${route.path}-${index}`}
          path={route.path}
          icon={route.icon}
          text={route.text}
          active={route.path === pathname}
        />
      ))}
    </nav>
  );
};
