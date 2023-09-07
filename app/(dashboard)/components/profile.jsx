"use client";
import { Icons } from "@/helpers";
import { useBio } from "@/stores";
import Image from "next/image";

export const Profile = () => {
  const { bio } = useBio();
  return (
    <div className="flex flex-col sm:flex-row mx-4 duration-200">
      <div className="avatar">
        <div className={`h-28 w-28 sm:w-36 sm:h-36 duration-200`}>
          <Image
            className="rounded-lg"
            src={bio.photo}
            alt="photo"
            height={300}
            width={300}
            placeholder="blur"
          />
        </div>
      </div>
      <div className="sm:ml-4 sm:mt-0 ml-0 mt-4 flex flex-col duration-300">
        <h1 className="font-bold text-3xl ">{bio.name}</h1>
        <h1 className="text-lg font-mono">{bio.job}</h1>
        <h1 className=" text-xs">{bio.description}</h1>
        <div className="flex-row flex flex-wrap">
          {bio?.contacts?.map(
            (element, index) =>
              element.enable && (
                <a
                  key={`${index}-contact`}
                  href={element.link}
                  aria-label={`${element.link}`}
                  className="rounded-full  flex flex-row w-auto bg-primary text-primary-content p-2 mr-2 mt-2  items-center hover:bg-primary-focus transition-all ease-in-out duration-300 hover:scale-110"
                >
                  {Icons[element.type]}
                </a>
              )
          )}
        </div>
      </div>
    </div>
  );
};
