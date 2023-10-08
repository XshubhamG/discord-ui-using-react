import LoginBtn from "../buttons/LoginBtn";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";

function Header() {
  return (
    <header className="bg-primary py-4">
      <div className="container mx-auto flex text-white font-bold items-center justify-between">
        <Logo />
        <Navbar />
        <LoginBtn bg="white" text="#5865f2" />
      </div>
    </header>
  );
}

export default Header;
