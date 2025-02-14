import spriteTrucks from "../assets/spriteTrucks.svg";
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars

const IconForButton = ({ id = "" }) => {
  return (
    <div className="flex items-center justify-center">
      <svg className="" width="32" height="32">
        <use
          className="w-[32px] h-[32px] fill-current"
          href={`${spriteTrucks}#${id}`}
        ></use>
      </svg>
    </div>
  );
};

export default IconForButton;
