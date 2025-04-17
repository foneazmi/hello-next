import { MeResponse, PortfolioItemProps } from "@/types/types";
import Image from "next/image";

async function getMe(): Promise<MeResponse> {
  const res = await fetch("https://api.khan.my.id/me", {
    next: {
      revalidate: 60 * 60 * 24, // Revalidate every 24 hours
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch portfolio data");
  }

  return res.json();
}

const PortfolioItem = ({
  image,
  title,
  description,
  link = "#",
  icon,
  text,
}: PortfolioItemProps) => (
  <div className="w-full sm:w-52 md:w-72 aspect-square rounded-lg bg-secondary overflow-hidden hover:scale-105 duration-300 select-none group">
    {image ? (
      <Image
        src={image}
        width={500}
        height={500}
        alt={title || "Portfolio item"}
        className="w-full h-full object-cover"
      />
    ) : (
      <div className="w-full h-full justify-center items-center flex">
        <h1 className="text-8xl text-center sm:text-6xl md:text-7xl">{text}</h1>
      </div>
    )}
    <div className="sticky bottom-0">
      <div className="h-20 w-full bg-linear-to-t invisible group-hover:visible from-primary from-50% to-transparent flex-row flex justify-center items-center p-4">
        <div className="flex flex-col flex-1">
          <h1 className="text-primary-content text-lg font-bold">{title}</h1>
          <h1 className="text-primary-content text-xs">{description}</h1>
        </div>
        <div>
          <a href={link} aria-label={`View ${title}`}>
            <h1 className="text-5xl">{icon}</h1>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default async function PortfolioPage() {
  const me = await getMe();

  return (
    <div className="overflow-y-auto h-full justify-center items-center flex scrollbar-hide">
      <div className="overflow-y-auto scrollbar-hide p-4 h-full flex items-center">
        <div className="flex flex-wrap justify-center m-auto gap-4 sm:gap-2 md:gap-4">
          {me?.portfolio?.map((item, i) => (
            <PortfolioItem key={`${i}-portfolio-item`} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
