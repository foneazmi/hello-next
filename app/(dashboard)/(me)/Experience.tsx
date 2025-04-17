import { getDuration } from "@/helpers";

interface Role {
  role: string;
  startDate: string;
  endDate?: string;
  location: string;
  desc: string;
}

interface ExperienceItem {
  company: string;
  roles?: Role[];
}

interface Bio {
  experiences?: ExperienceItem[];
}

interface ExperienceProps {
  bio: Bio;
}

interface ExperienceItemProps {
  company: string;
  roles?: Role[];
}

interface RoleItemProps {
  role: Role;
}

export const Experience = ({ bio }: ExperienceProps) => {
  return (
    bio.experiences && (
      <div>
        <p className="text-xl">Experience</p>
        {bio.experiences.map((experience, index) => (
          <ExperienceItem key={`${index}-experiences`} {...experience} />
        ))}
      </div>
    )
  );
};

const ExperienceItem = ({ company, roles }: ExperienceItemProps) => {
  return (
    <div className="flex mt-4 flex-col">
      <div className="flex">
        <div className="h-5 w-2 bg-primary mr-2 rounded-sm" />
        <p className="antialiased text-base font-extrabold">{company}</p>
      </div>
      {roles?.map((role, index) => (
        <RoleItem key={`${index}-role`} role={role} />
      ))}
    </div>
  );
};

const RoleItem = ({ role }: RoleItemProps) => (
  <div className="flex mb-2">
    <div className="w-2 mr-2 mt-2">
      <div className="w-2 h-2 bg-secondary rounded-full" />
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
