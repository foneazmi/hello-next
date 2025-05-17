import { Suspense } from "react";
import Image from "next/image";
import { MeResponse, PortfolioItemProps } from "./types";

// Fetch user data with 24-hour revalidation
async function fetchMe(): Promise<MeResponse> {
  const res = await fetch("https://api.khan.my.id/me", {
    next: { revalidate: 60 * 60 * 24 },
  });
  if (!res.ok) throw new Error("Failed to fetch portfolio data");
  return res.json();
}

function PortfolioItem({
  image,
  title,
  description,
  link = "#",
  icon,
  text,
  index = 0,
}: PortfolioItemProps & { index: number }) {
  return (
    <div
      className="w-full sm:w-52 md:w-72 aspect-square rounded-lg bg-secondary overflow-hidden hover:scale-105 duration-300 group opacity-0 animate-fade-in"
      style={{
        animationDelay: `${index * 80}ms`,
        animationFillMode: "forwards",
      }}
    >
      {image ? (
        <Image
          src={image}
          width={500}
          height={500}
          alt={title || "Portfolio item"}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <h1 className="text-8xl sm:text-6xl md:text-7xl text-center">
            {text}
          </h1>
        </div>
      )}
      <div className="sticky bottom-0">
        <div className="h-20 w-full bg-linear-to-t from-primary from-50% to-transparent flex items-center p-4 invisible group-hover:visible">
          <div className="flex flex-col flex-1">
            <h1 className="text-primary-content text-lg font-bold">{title}</h1>
            <h2 className="text-primary-content text-xs">{description}</h2>
          </div>
          <a href={link} aria-label={`View ${title}`}>
            <span className="text-5xl">{icon}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

async function PortfolioContent() {
  const me = await fetchMe();
  const portfolio = me?.portfolio ?? [];

  return (
    <div className="overflow-y-auto h-full flex justify-center items-center scrollbar-hide">
      <div className="overflow-y-auto scrollbar-hide p-4 h-full flex items-center">
        <div className="flex flex-wrap justify-center m-auto gap-4 sm:gap-2 md:gap-4">
          {portfolio.map((item, i) => (
            <PortfolioItem key={`${i}-portfolio-item`} {...item} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <span className="loading loading-spinner loading-lg" />
        </div>
      }
    >
      <PortfolioContent />
    </Suspense>
  );
}
