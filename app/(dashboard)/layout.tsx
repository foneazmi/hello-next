import { Navbar } from "../../components/navbar";
import {
  FaRegLaughWink,
  FaRegObjectGroup,
  FaRegChartBar,
} from "react-icons/fa";
import { ReactNode } from "react";

interface RouteItem {
  text: string;
  path: string;
  icon: ReactNode;
  external?: boolean;
}

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
    text: "Status",
    path: "https://status.khan.my.id", // Replace with your actual status page URL
    icon: <FaRegChartBar size={18} />,
    external: true, // Mark as external link
  },
];

interface RootLayoutProps {
  children: ReactNode;
}

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
