import Image from "next/image";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import { ReactNode } from "react";
import { ProfileProps } from "./types";

export type ContactType = "wa" | "li" | "gh" | "tg" | "email";

const ICONS: Record<ContactType, ReactNode> = {
  wa: <FaWhatsapp />,
  li: <FaLinkedin />,
  gh: <FaGithub />,
  tg: <FaTelegram />,
  email: <FaEnvelope />,
};

export const Profile = ({ bio }: ProfileProps) => (
  <div className="flex flex-col sm:flex-row mx-4 duration-200">
    <div className="avatar">
      <div className="h-28 w-28 sm:w-36 sm:h-36 duration-200 overflow-hidden rounded-lg">
        <Image
          className="hover:scale-110 duration-150"
          src={bio.photo}
          alt="photo"
          height={300}
          width={300}
          placeholder="blur"
          blurDataURL={`${bio.photo}&s=100`}
          priority
        />
      </div>
    </div>
    <div className="sm:ml-4 sm:mt-0 ml-0 mt-4 flex flex-col duration-300">
      <h1 className="font-bold text-3xl">{bio.name}</h1>
      <h2 className="text-lg font-mono">{bio.job}</h2>
      <p className="text-xs">{bio.description}</p>
      <div className="flex flex-row flex-wrap">
        {bio?.contacts
          ?.filter((c) => c.enable)
          .map((contact, idx) => (
            <a
              key={`${idx}-contact`}
              href={contact.link}
              aria-label={contact.type}
              className="rounded-full flex flex-row w-auto bg-primary text-primary-content p-2 mr-2 mt-2 items-center hover:bg-primary-focus transition-all ease-in-out duration-300 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              {ICONS[contact.type]}
            </a>
          ))}
      </div>
    </div>
  </div>
);
