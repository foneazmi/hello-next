import { THEME } from "@/helpers";
import { FaSwatchbook } from "react-icons/fa";
import { ThemeItem } from "./theme-item";

export const ThemePicker = () => {
  return (
    <div className="dropdown dropdown-hover dropdown-end absolute top-4 right-4">
      <label className="btn btn-ghost btn-circle bg-base-300">
        <FaSwatchbook className="inline-block h-4 w-4 text-base-content stroke-current sm:h-5 sm:w-5" />
      </label>
      <div className="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box h-52 w-52 overflow-y-auto shadow-2xl scrollbar-hide">
        <div className="grid grid-cols-1 gap-3 p-3">
          {THEME.map((element, index) => (
            <ThemeItem theme={element} key={`${index}-theme`} />
          ))}
        </div>
      </div>
    </div>
  );
};
