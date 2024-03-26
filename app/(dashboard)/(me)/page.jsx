import { Experience } from "./Experience";
import { Profile } from "./Profile";

async function getMe() {
  const res = await fetch("https://api.khan.my.id/me", {
    next: {
      revalidate: 60 * 60 * 24 * 30,
    },
  });
  return res.json();
}

export default async function Me() {
  const me = await getMe();
  return (
    <div className="overflow-y-auto h-full justify-center items-center flex scrollbar-hide ">
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
