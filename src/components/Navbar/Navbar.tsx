import { Link } from "react-router-dom";

function Navbar() {
  const navlinks = [
    "Download",
    "Nitro",
    "Discover",
    "Safety",
    "Support",
    "Blog",
    "Careers",
  ];

  return (
    <nav>
      <ul className="flex items-center gap-6 text-sm">
        {navlinks.map((link) => {
          return (
            <li className=" hover:border-b-2 border-white pb-1">
              <Link to="#">{link}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
