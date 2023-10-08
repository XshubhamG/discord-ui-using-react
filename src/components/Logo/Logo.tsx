import { BsDiscord } from "react-icons/bs";
import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <NavLink to="/" className="flex items-center gap-2 text-xl pb-2">
      <div>
        <BsDiscord />
      </div>
      <h2 className="text-lg">Discord</h2>
    </NavLink>
  );
}

export default Logo;
