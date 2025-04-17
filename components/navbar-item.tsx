import Link from "next/link";
import { memo } from "react";

interface NavbarItemProps {
  active?: boolean;
  path: string;
  icon: React.ReactNode;
  text: string;
  external?: boolean;
}

export const NavbarItem = memo<NavbarItemProps>(function NavbarItem({
  active = false,
  path,
  icon,
  text,
  external = false,
}) {
  const iconClasses = [
    "py-2 rounded-full",
    active
      ? "bg-primary px-4 text-primary-content"
      : "text-base-content transition-all duration-500 group-hover:bg-primary group-hover:text-primary-content group-hover:px-4",
  ].join(" ");

  return external ? (
    <a
      href={path}
      className="group my-4 flex w-24 select-none flex-col items-center justify-center"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={iconClasses}>{icon}</div>
      <span className="truncate text-sm text-base-content">{text}</span>
    </a>
  ) : (
    <Link
      href={path}
      className="group my-4 flex w-24 select-none flex-col items-center justify-center"
      aria-current={active ? "page" : undefined}
    >
      <div className={iconClasses}>{icon}</div>
      <span className="truncate text-sm text-base-content">{text}</span>
    </Link>
  );
});
