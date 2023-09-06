import Link from "next/link";

export const NavbarItem = (props: any) => {
  const iconStyle = props.active
    ? "bg-primary px-4 py-2 rounded-full text-primary-content"
    : "py-2 rounded-full text-base-content bg-blend-darken duration-500 transition-all group-hover:bg-primary group-hover:text-primary-content group-hover:px-4";
  return (
    <Link
      className="w-24 flex items-center justify-center flex-col my-4 select-none group"
      href={props.path}
    >
      <div className={iconStyle}>{props.icon}</div>
      <span className="truncate text-sm text-base-content overflow-hidden">
        {props.text}
      </span>
    </Link>
  );
};
