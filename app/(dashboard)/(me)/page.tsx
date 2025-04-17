import { Experience } from "./Experience";
import { Contact, Profile } from "./Profile";

interface BioData {
  name: string;
  title: string;
  about: string;
  skills: string[];
  experiences?: {
    company: string;
    role: string;
    duration: string;
    description: string;
  }[];
  photo: string;
  job: string;
  description: string;
  contacts?: Contact[];
}

async function getMe(): Promise<BioData> {
  const res = await fetch("https://api.khan.my.id/me", {
    next: {
      revalidate: 60 * 60 * 24, // Revalidate every 24 hours
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch bio data");
  }

  return res.json();
}

export default async function Me() {
  const me = await getMe();

  return (
    <div className="overflow-y-auto h-full justify-center items-center flex scrollbar-hide">
      <div className="m-auto xl:w-6/12 lg:w-8/12 sm:w-10/12 w-full py-10 h-auto">
        <Profile bio={me} />
        <div className="flex flex-col mx-4">
          <div className="divider" />
          <Experience bio={me} />
        </div>
      </div>
    </div>
  );
}
