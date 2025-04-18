import { Link, NavLink } from "react-router-dom";

import Logo2x from "../assets/images/Logo@2x.webp";
import Logo1x from "../assets/images/Logo1x.webp";
import IconForButton from "./IconForButton";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { toggleFilter } from "../redux/trucks/filterOpen";
import { isFilterOpenSelector } from "../redux/trucks/truckSelectors";
// import ModalDriverWindow from "./ModalDriverWindow";
import { useState } from "react";

function Header() {
  const [isCatalogActive, setIsCatalogActive] = useState(false);
  const isFilterOpen = useSelector(isFilterOpenSelector);
  // const [isFilterOpen, setIsFilterOpen] = useState(false);
  const dispatch = useDispatch();

  const handleToggleFilter = () => {
    if (isFilterOpen) {
      // setIsFilterOpen(false);
      dispatch(toggleFilter(false));
    } else {
      // setIsFilterOpen(true);
      dispatch(toggleFilter(true));
    }
  };

  const handleCatalogActive = ({ isActive }) => {
    setIsCatalogActive(isActive);
    return isActive
      ? "text-textAccent"
      : "notActiveNavLink hover:text-textAccent duration-200 ease-in";
  };
  return (
    <>
      <header className="flex px-[20px] md:px-[64px] py-[24px] items-center justify-between bg-bgBadgeColor fixed top-0 left-0 inset-x-0  z-20">
        <Link to="/">
          <picture className="">
            <source srcSet={Logo1x} type="image/webp" />
            <img
              src={Logo2x}
              alt="logo traveltruck"
              className="min-w-[112px] transition-colors duration-300 ease-in-out hover:filter hover:invert  hover:saturate-220 hover:contrast-45 hover:hue-rotate-[95deg]"
            />
          </picture>
        </Link>
        <nav className="flex gap-12">
          <NavLink
            end
            to={"/"}
            className={({ isActive }) =>
              `hidden lg:block ${
                isActive
                  ? "text-textAccent"
                  : "notActiveNavLink hover:text-textAccent duration-200 ease-in"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink end to={"catalog"} className={handleCatalogActive}>
            Catalog
          </NavLink>
        </nav>
        <div>
          <NavLink
            end
            to={"favorites"}
            className={({ isActive }) =>
              `flex items-center ${
                isActive
                  ? "text-textAccent fill-textAccent font-medium"
                  : "text-textPrimary fill-textPrimary hover:text-textAccent hover:fill-textAccent transition duration-200 ease-in"
              }`
            }
          >
            {() => (
              <>
                <span className="block lg:hidden">
                  <IconForButton id="iconStarFull" iconW="26px" iconH="26px" />
                </span>
                <span className="hidden lg:block">Favorites</span>
              </>
            )}
          </NavLink>
        </div>

        {isCatalogActive && (
          <div className="block lg:hidden">
            <Button
              icon={isFilterOpen ? "iconCross" : "iconFilters"}
              onClick={handleToggleFilter}
              iconW="24px"
              iconH="24px"
              className="w-full fill-textPrimary flex items-center justify-center"
            />
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
