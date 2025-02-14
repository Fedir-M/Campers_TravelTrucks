import { Link, NavLink } from "react-router";

import Logo2x from "../assets/images/Logo@2x.webp";
import Logo1x from "../assets/images/Logo1x.webp";

function Header() {
  return (
    <header className="flex px-[64px] py-[24px] items-center justify-between bg-bgBadgeColor">
      <Link to="/">
        <picture className="">
          <source srcSet={Logo1x} type="image/webp" />
          <img
            src={Logo2x}
            alt="logo traveltruck"
            className="transition-colors duration-300 ease-in-out hover:filter hover:invert  hover:saturate-220 hover:contrast-45 hover:hue-rotate-[95deg]"
          />
        </picture>
      </Link>
      <nav className="flex gap-12">
        <NavLink
          end
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "text-textAccent"
              : "notActiveNavLink hover:text-textAccent transition-300 ease-in"
          }
        >
          Home
        </NavLink>
        <NavLink
          end
          to={"catalog"}
          className={({ isActive }) =>
            isActive
              ? "text-textAccent"
              : "notActiveNavLink hover:text-textAccent transition-300 ease-in"
          }
        >
          Catalog
        </NavLink>
      </nav>
      <div>
        <NavLink
          end
          to={"favorites"}
          className={({ isActive }) =>
            isActive
              ? "text-textAccent"
              : "notActiveNavLink hover:text-textAccent transition-300 ease-in"
          }
        >
          Favorites
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
