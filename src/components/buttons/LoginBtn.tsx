import { NavLink } from "react-router-dom";

interface Props {
  bg: string;
  text: string;
}

function LoginBtn({ bg, text }: Props) {
  return (
    <div
      style={{ backgroundColor: bg, color: text }}
      className="font-normal text-sm px-4 py-1 rounded-2xl border-white hover:shadow-xl"
    >
      <NavLink to="/login">Login</NavLink>
    </div>
  );
}

export default LoginBtn;
