import Link from "next/link";
import { memo, Suspense } from "react";
import {
  FaBook,
  FaFolder,
  FaRegChartBar,
  FaTachometerAlt,
} from "react-icons/fa";

const APPS = [
  {
    text: "Status",
    link: "https://status.khan.my.id",
    icon: <FaTachometerAlt size={36} />,
    external: true,
  },
  {
    text: "Bookkeeping",
    link: "https://ez.khan.my.id",
    icon: <FaBook size={36} />,
    external: true,
  },
  {
    text: "File",
    link: "https://file.khan.my.id",
    icon: <FaFolder size={36} />,
    external: true,
  },
  {
    text: "Stock Insight",
    link: "https://stock.khan.my.id/",
    icon: <FaRegChartBar size={36} />,
    external: true,
  },
];

export default async function Page() {
  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <span className="loading loading-spinner loading-lg" />
        </div>
      }
    >
      <div className="p-4 flex ">
        <div className="flex flex-wrap duration-300 w-full">
          {APPS.map((item: any, i: number) => (
            <div
              className="w-1/3 sm:w-1/4 md:w-1/6 lg:w-1/8 xl:w-1/10 2xl:w-1/12"
              key={`${item.path}${i}`}
            >
              <div
                className="m-2 aspect-square bg-primary rounded-lg hover:scale-105 duration-300 group opacity-0 animate-fade-in justify-center items-center flex"
                style={{
                  animationDelay: `${i * 80}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <AppItem item={item} index={i} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Suspense>
  );
}

const AppItem = memo(function NavbarItem({ item, index }: any) {
  return item.external ? (
    <a
      key={`${item.link}${index}`}
      href={item.link}
      className="flex flex-col items-center justify-center"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="text-primary-content">{item.icon}</div>
      <span className="truncate text-sm text-primary-content mt-1">
        {item.text}
      </span>
    </a>
  ) : (
    <Link
      key={`${item.link}${index}`}
      href={item.link}
      className="flex flex-col items-center justify-center"
    >
      <div className="text-primary-content">{item.icon}</div>
      <span className="truncate text-sm text-primary-content mt-1">
        {item.text}
      </span>
    </Link>
  );
});
