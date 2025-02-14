import spriteTrucks from "../assets/spriteTrucks.svg";

// eslint-disable-next-line react/prop-types
const CategoriesFeaturesLabels = ({ iconId, categoryLabel }) => {
  return (
    <div className="inline-flex w-auto h-auto px-[18px] py-[12px] bg-bgBadgeColor rounded-[100px]">
      <svg className="flex items-center " width="20" height="20">
        <use
          className="w-[20px] h-[20px] fill-current"
          href={`${spriteTrucks}#${iconId}`}
        ></use>
      </svg>
      <p className="ml-[8px] font-medium leading-[20px]">{categoryLabel}</p>
    </div>
  );
};

export default CategoriesFeaturesLabels;
