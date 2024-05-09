import { Navbar } from "../../components/navbar";
import { FaRegLaughWink, FaRegObjectGroup } from "react-icons/fa";

const ROUTE = [
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
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className="flex h-screen w-screen bg-base-300 flex-col-reverse sm:flex-row">
        <Navbar route={ROUTE} />
        <div className="flex-1 w-full bg-base-100 sm:rounded-3xl overflow-hidden sm:my-2 sm:mr-2">
          {children}
        </div>
      </div>
    </main>
  );
}
