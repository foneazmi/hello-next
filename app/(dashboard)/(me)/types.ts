import { ContactType } from "./Profile";

export interface BioProps {
  name: string;
  title: string;
  about: string;
  skills: string[];
  experiences?: ExperienceItemProps[];
  photo: string;
  job: string;
  description: string;
  contacts?: Contact[];
}

export interface Contact {
  type: ContactType;
  link: string;
  enable: boolean;
}

export interface ProfileProps {
  bio: BioProps;
}

export interface RoleItemProps {
  role: Role;
}

export interface Role {
  role: string;
  startDate: string;
  endDate?: string;
  location: string;
  desc: string;
}

export interface ExperienceItemProps {
  company: string;
  roles?: Role[];
}
