import { Experience } from "./components/experience";
import { Profile } from "./components/profile";

export default function Page() {
  return (
    <div className="overflow-y-auto h-full justify-center items-center flex scrollbar-hide ">
      <div className="m-auto xl:w-6/12 lg:w-8/12 sm:w-10/12 w-full py-10 h-auto">
        <Profile />
        <div className="flex flex-col mx-4">
          <div className="divider" />
          <Experience />
        </div>
      </div>
    </div>
  );
}
