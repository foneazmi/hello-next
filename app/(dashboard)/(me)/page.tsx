import { Experience } from "./Experience";
import { Profile } from "./Profile";
import { BioProps } from "./types";
import { Suspense } from "react";

// Fetch user data with 24-hour revalidation
async function fetchMe(): Promise<BioProps> {
  const res = await fetch("https://api.khan.my.id/me", {
    next: { revalidate: 60 * 60 * 24 },
  });
  if (!res.ok) throw new Error("Failed to fetch portfolio data");
  return res.json();
}

function Loading() {
  return (
    <div className="flex h-full items-center justify-center">
      <span className="loading loading-spinner loading-lg" />
    </div>
  );
}

async function MeContent() {
  const me = await fetchMe();

  return (
    <div className="m-auto w-full py-10 h-auto sm:w-10/12 lg:w-8/12 xl:w-6/12 animate-fade-in">
      <Profile bio={me} />
      <div className="flex flex-col mx-4">
        <div className="divider" />
        <Experience bio={me} />
      </div>
    </div>
  );
}

export default function Me() {
  return (
    <div className="flex h-full items-center justify-center overflow-y-auto scrollbar-hide">
      <Suspense fallback={<Loading />}>
        <MeContent />
      </Suspense>
    </div>
  );
}
