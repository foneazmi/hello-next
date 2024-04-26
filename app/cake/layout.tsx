import { FaCakeCandles } from "react-icons/fa6";
import { Navbar } from "../../components/navbar";

const ROUTE = [
  {
    text: "Cake",
    path: "/cake",
    icon: <FaCakeCandles size={18} />,
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
