import { notFound } from "next/navigation";
import { Suspense } from "react";

export default async function Page() {
  const data = await fetch("https://api.khan.my.id/sa/list");
  if (!data.ok) {
    notFound();
  }
  const { items } = await data.json();
  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <span className="loading loading-spinner loading-lg" />
        </div>
      }
    >
      <div className="overflow-y-auto h-full flex justify-center items-center scrollbar-hide">
        <div className="overflow-y-auto scrollbar-hide p-4 h-full flex items-center">
          <div className="flex flex-wrap justify-center m-auto gap-4 sm:gap-2 md:gap-4">
            {items.map((item: any, i: number) => (
              <div
                key={`${i}-item`}
                className="w-36 p-2 aspect-square rounded-lg bg-secondary overflow-hidden hover:scale-105 duration-300 group opacity-0 animate-fade-in"
                style={{
                  animationDelay: `${i * 80}ms`,
                  animationFillMode: "forwards",
                }}
              >
                {/* <div className="sticky bottom-0"> */}
                <h1 className="text-primary-content">{item.symbol}</h1>
                <h1 className="text-primary-content">{item.signal}</h1>
                <h1 className="text-primary-content">{item.take_profit}</h1>
                <h1 className="text-primary-content">{item.stop_loss}</h1>
                <h1 className="text-primary-content">{item.entry}</h1>
                {/* <div className="h-20 w-full bg-linear-to-t from-primary from-50% to-transparent flex items-center p-4 invisible group-hover:visible">
                    <div className="flex flex-col flex-1">
                      <h1 className="text-primary-content text-lg font-bold">
                        {item.symbol}
                      </h1>
                      <h2 className="text-primary-content text-xs">
                        {item.reason}
                      </h2>
                    </div>
                  </div> */}
                {/* </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Suspense>
  );
}
