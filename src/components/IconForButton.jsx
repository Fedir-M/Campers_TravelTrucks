import spriteTrucks from "../assets/spriteTrucks.svg";
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars

const IconForButton = ({
  id = "",
  iconW = "32px",
  iconH = "32px",
  classSizeSVG,
}) => {
  return (
    <svg className={classSizeSVG} width={iconW} height={iconH}>
      <use href={`${spriteTrucks}#${id}`}></use>
    </svg>
  );
};

export default IconForButton;
