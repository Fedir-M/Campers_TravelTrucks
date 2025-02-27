import { Link } from "react-router";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { favoritesSelector } from "../redux/trucks/truckSelectors";
import {
  addToFavorites,
  removeFromFavorites,
} from "../redux/trucks/favoritesSlice";

import categoriesFeaturesLibrary from "../services/categoriesFeaturesLibrary";
import CategoriesFeaturesLabels from "./CategoriesFeaturesLabels";
import spriteTrucks from "../assets/spriteTrucks.svg";

// //* connects with Stage-1
// import { toggleButton } from "../redux/trucks/buttonActiveClickSlice";

// import { useEffect } from "react";
// import { fetchTrucksData } from "../redux/trucks/trucksOperations";

// eslint-disable-next-line react/prop-types
const TrucksList = ({ visibleCount, filteredTrucks }) => {
  const dispatch = useDispatch();
  //* connects with Stage-1
  //   const buttonActiveState = useSelector(isActiveSelector);
  const favorites = useSelector(favoritesSelector);

  // eslint-disable-next-line react/prop-types
  const visibleTrucks = filteredTrucks.slice(0, visibleCount);

  // // eslint-disable-next-line react/prop-types
  // filteredTrucks && filteredTrucks.length > 0
  //   ? // eslint-disable-next-line react/prop-types
  //     filteredTrucks.slice(0, visibleCount)
  //   : trucks.slice(0, visibleCount);

  //   console.log(trucks);
  // ---------------------------------------------------------------------
  //* Stage-1. It was a start. Initially, I made 'blackHeart --> to redHeart' color
  //   const handleButtonActiveClick = (buttonId) => {
  //     dispatch(toggleButton(buttonId));
  //   };
  // ---------------------------------------------------------------------

  const handleAddRemoveFavorites = (truckId) => {
    if (favorites.includes(truckId)) {
      dispatch(removeFromFavorites(truckId));
    } else {
      dispatch(addToFavorites(truckId));
    }
  };

  return (
    <div>
      <ul className="flex flex-col gap-[6px] ">
        {visibleTrucks.map((truck) => {
          // ---------------------------------------------------------------------
          //! connects with Stage-1
          // Получаем состояние активности для конкретного truck.id
          //   const isActive = buttonActiveState[truck.id];
          // ---------------------------------------------------------------------
          const isFavorite = favorites.includes(truck.id);

          return (
            <li
              key={truck.id}
              className="flex p-[14px] border-[1px] rounded-[20px] outline-0 focus:ring-2  focus:ring-textAccent hover:ring-1 hover:ring-textAccent"
              style={{ borderColor: "var(--color-borderButtonColor)" }}
            >
              <img
                src={truck.gallery[0]?.thumb || "https://defaultPicture"}
                alt={`${truck.name} preview`}
                className="max-w-[292px] max-h-[320px] object-cover rounded-[10px]"
              />
              <div className="ml-[24px] ">
                <div className="flex justify-between">
                  <h2 className="text-[24px] leading-[32px]">{truck.name}</h2>
                  <div className="flex">
                    <strong className="text-[24px] font-medium leading-[32px]">
                      &#8364; {truck.price}
                    </strong>
                    <Button
                      onClick={() => handleAddRemoveFavorites(truck.id)}
                      icon="iconHeartBlack"
                      className={`ml-[12px] w-[24px] h-[24px] ${
                        isFavorite ? "fill-heartColor" : "fill-textPrimary" //а тут было isActive, стало isFavorite
                      }`}
                    />
                  </div>
                </div>

                <div className="flex flex-wrap items-center mt-[8px]">
                  <svg
                    className={`w-[16px] h-[16px] ${
                      truck.reviews && truck.reviews.length > 0
                        ? "fill-starColor"
                        : "fill-bgBadgeColor"
                    }`}
                  >
                    <use
                      className="w-[32px] h-[32px] "
                      href={`${spriteTrucks}#iconStarGrey`}
                    ></use>
                  </svg>
                  <p className="ml-[4px]"> {truck.rating}</p>
                  <svg
                    className="fill-textPrimary ml-[16px]"
                    width="16"
                    height="16"
                  >
                    <use
                      className="w-[32px] h-[32px] "
                      href={`${spriteTrucks}#iconMapGrey`}
                    ></use>
                  </svg>
                  <p className="ml-[4px]">{truck.location}</p>
                </div>

                <p className="mt-[24px] line-clamp-1 text-textMonthPassed font-normal">
                  {truck.description}
                </p>
                <ul className="flex flex-wrap gap-[8px] mt-[24px]">
                  {categoriesFeaturesLibrary.map(
                    (feature) =>
                      truck[feature.category] === feature.value && (
                        <li key={feature.category}>
                          <CategoriesFeaturesLabels
                            iconId={feature.iconCategoryId}
                            categoryLabel={feature.categoryLabel}
                          />
                        </li>
                      )
                  )}
                </ul>
                <Link
                  to={`/catalog/${truck.id}`}
                  className="mt-[24px] min-w-[173px] max-w-[250px] font-medium py-[16px] px-[48px] tracking-[-0.08px] leading-[1.5em] text-center text-textSecondary bg-ButtonPrimaryColor rounded-[200px] inline-flex items-center justify-center  hover:bg-linear-45 hover:from-[#3c9767] from-40% hover:to-[#ffc531] to-90% hover:shadow-lg hover:shadow-green-500/50 outline-0 focus:ring-2 focus:ring-green-500/50 focus:bg-ButtonHoverColor focus:shadow-lg focus:shadow-green-500/50 transition-colors duration-300 ease-in"
                >
                  Show more
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
      <Button />
    </div>
  );
};

export default TrucksList;
