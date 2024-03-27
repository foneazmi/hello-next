import { memo } from "react";
import { FaRocket } from "react-icons/fa";

export const Header = memo(() => {
  return (
    <div className="absolute top-4 right-4 flex flex-row">
      <a
        className="btn btn-ghost btn-circle bg-base-300"
        href="https://foneazmi.github.io/status/"
      >
        <FaRocket className="inline-block h-4 w-4 text-base-content stroke-current sm:h-5 sm:w-5" />
      </a>
    </div>
  );
});
