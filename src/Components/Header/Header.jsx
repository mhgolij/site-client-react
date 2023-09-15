import { Link } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  return (
    <nav className="bg-white border-gray-200">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <Link to={"/"} className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            جی بوک
          </span>
        </Link>
        <div
          id="mega-menu-full"
          className="items-center z-10 justify-between font-medium hidden w-full md:flex md:w-auto md:order-1"
        >
         <HeaderMenu />
        </div>
      </div>
    </nav>
  );
};
export default Header;
