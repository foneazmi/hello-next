"use client";
// import { useTheme } from "@/stores";

export default function Home() {
  return (
    <div className="overflow-y-auto h-full justify-center items-center flex scrollbar-hide ">
      <div className="m-auto xl:w-6/12 lg:w-8/12 sm:w-10/12 w-full py-10 h-auto">
        {/* <Profile /> */}
        <Body />
      </div>
    </div>
  );
}

const Body = () => (
  <div className="flex flex-col mx-4">
    <div className="divider" />
    <Experience />
  </div>
);

const Profile = () => {
  // const { bio } = useBio();
  return (
    <div className="flex flex-col sm:flex-row mx-4 duration-200">
      <div className="avatar">
        <div className={`h-28 w-28 sm:w-32 sm:h-32 duration-200`}>
          {/* <img src={bio.photo} alt="" /> */}
        </div>
      </div>
      <div className="sm:ml-4 sm:mt-0 ml-0 mt-4 flex flex-col duration-300">
        {/* <h1 className="font-bold text-3xl ">{bio.name}</h1> */}
        {/* <h1 className="text-lg font-mono">{bio.job}</h1> */}
        {/* <h1 className=" text-xs">{bio.description}</h1> */}
        {/* <div className="flex-row flex flex-wrap">
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
        </div> */}
      </div>
    </div>
  );
};

const Experience = () => {
  // const { bio } = useBio();
  return (
    // bio.experiences && (
    <div>
      <p className=" text-xl">Experience</p>
      {/* {bio.experiences.map((experience, index) => (
          <ExperienceItem key={`${index}-experiences`} {...experience} />
        ))} */}
    </div>
    // )
  );
};

const ExperienceItem = ({ company, roles }) => {
  return (
    <div className="flex mt-4 flex-col group hover:scale-110 hover:translate-x-8 duration-200">
      <div className="flex">
        <div className="h-5 group-hover:w-10 duration-200 w-2 bg-primary mr-2 rounded" />
        <p className="antialiased text-base font-extrabold">{company}</p>
      </div>
      {roles?.map((role, index) => (
        <RoleItem key={`${index}-role`} role={role} />
      ))}
    </div>
  );
};

const RoleItem = ({ role }) => (
  <div className="flex mb-2 group/item">
    <div className="w-2 mr-2 group-hover/item:mr-3 mt-2 duration-200">
      <div className="w-2 h-2 bg-secondary rounded-full duration-200 group-hover/item:h-9 group-hover/item:w-3" />
    </div>
    <div>
      <p className="antialiased text-sm font-semibold">{role.role}</p>
      <p className="antialiased italic text-xs font-light">
        {getDuration(role.startDate, role.endDate)}
      </p>
      <p className="antialiased text-xs font-medium">{role.location}</p>
      <p className="antialiased text-xs font-normal">{role.desc}</p>
    </div>
  </div>
);
