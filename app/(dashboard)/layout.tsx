import { Navbar } from "../../components/navbar";
import {
  FaRegLaughWink,
  FaRegObjectGroup,
  FaRegChartBar,
  FaChartArea,
  FaAppleAlt,
  FaApper,
  FaDiceD6,
} from "react-icons/fa";
import { RootLayoutProps, RouteItem } from "./types";

const ROUTES: RouteItem[] = [
  {
    text: "Me",
    path: "/",
    icon: <FaRegLaughWink size={18} />,
  },
  {
    text: "Portfolio",
    path: "/portfolio",
    icon: <FaRegObjectGroup size={18} />,
  },
  {
    text: "Apps",
    path: "/apps",
    icon: <FaDiceD6 size={18} />,
  },
];

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <main className="flex h-screen w-screen bg-base-300 flex-col-reverse sm:flex-row">
      <Navbar routes={ROUTES} />
      <section className="flex-1 w-full bg-base-100 overflow-hidden sm:rounded-3xl sm:my-2 sm:mr-2">
        {children}
      </section>
    </main>
  );
}
