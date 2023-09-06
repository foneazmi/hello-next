import { THEME } from "@/helpers";
import { FaSwatchbook } from "react-icons/fa";
import { ThemeItem } from "./components/theme-item";
import Link from "next/link";
import { FaRegLaughWink, FaRegObjectGroup } from "react-icons/fa";

export default function RootLayout({ children }) {
  return (
    <div className="flex h-screen w-screen bg-base-300 flex-col-reverse sm:flex-row">
      <Navbar />
      <div className="flex-1 w-full bg-base-100 sm:rounded-3xl overflow-hidden sm:my-2 sm:mr-2">
        {children}
      </div>
      <FAB />
    </div>
  );
}

const FAB = () => {
  return (
    <div className="dropdown dropdown-hover dropdown-end absolute top-4 right-4">
      <label tabIndex="0" className="btn btn-ghost btn-circle bg-base-300">
        <FaSwatchbook className="inline-block h-4 w-4 text-base-content stroke-current sm:h-5 sm:w-5" />
      </label>
      <div className="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box h-52 w-52 overflow-y-auto shadow-2xl scrollbar-hide">
        <div className="grid grid-cols-1 gap-3 p-3" tabIndex="0">
          {THEME.map((element, index) => (
            <ThemeItem theme={element} key={`${index}-theme`} />
          ))}
        </div>
      </div>
    </div>
  );
};

const route = [
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
const Navbar = () => {
  // const location = useLocation();
  return (
    <div className="sm:h-screen sm:w-24 h-20 w-screen flex justify-center sm:flex-col flex-row items-center sm:relative duration-300">
      {route.map((element, index) => (
        <NavbarItem
          key={`${index}-sidebar`}
          path={element.path}
          icon={element.icon}
          text={element.text}
          active={false}
        />
      ))}
    </div>
  );
};

const NavbarItem = (props) => {
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
