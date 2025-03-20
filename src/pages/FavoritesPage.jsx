import { useDispatch, useSelector } from "react-redux";
import {
  favoritesSelector,
  trucksSelector,
} from "../redux/trucks/truckSelectors";

import Button from "../components/Button";

import categoriesFeaturesLibrary from "../services/categoriesFeaturesLibrary";
import CategoriesFeaturesLabels from "../components/CategoriesFeaturesLabels";
import { removeFromFavorites } from "../redux/trucks/favoritesSlice";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { fetchTrucksData } from "../redux/trucks/trucksOperations";
import spriteTrucks from "../assets/spriteTrucks.svg";

const FavoritesPage = () => {
  const trucks = useSelector(trucksSelector);
  const favorites = useSelector(favoritesSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrucksData());
  }, [dispatch]);

  const handleAddRemoveFavorites = (truckId) => {
    if (favorites.includes(truckId)) {
      dispatch(removeFromFavorites(truckId));
    }
  };
  // console.log(trucks);
  // console.log(favorites);
  const favoriteTrucks = trucks.filter((truck) => favorites.includes(truck.id));

  return (
    <>
      <ul className="flex flex-col gap-[6px] mt-[8px] px-[6px] md:px-[64px]">
        {favoriteTrucks.map((truck) => (
          <div key={truck.id} className="relative z-[0px]">
            <Button
              onClick={() => handleAddRemoveFavorites(truck.id)}
              icon="iconHeartBlack"
              className=" absolute z-[10] top-[16px] right-[20px] ml-[12px] w-[32px] h-[32px] lg:w-[32px] lg:h-[32px] fill-heartColor bg-bgHeaderColor md:bg-transparent rounded-full flex items-center justify-center p-1"
            />

            <Link
              to={`/catalog/${truck.id}`}
              state={{ from: "/favorites" }}
              className="flex outline-0  focus:ring-2  focus:ring-textAccent hover:ring-2 hover:ring-textAccent border-[1px] rounded-[20px]"
              style={{ borderColor: "var(--color-borderButtonColor)" }}
            >
              <li className="flex flex-col md:flex-row p-[14px] w-full">
                <img
                  src={truck.gallery[0]?.thumb || "https://defaultPicture"}
                  alt={`${truck.name} preview`}
                  className="mainImgPrev object-cover rounded-[10px] md:max-w-[292px] md:max-h-[320px]"
                />
                <div className="md:ml-[24px] md:w-full">
                  <div className="md:flex  justify-between">
                    <h2 className="text-[18px] lg:text-[24px] leading-[32px]">
                      {truck.name}
                    </h2>
                    <div className="flex mr-[0px] md:mr-[44px]">
                      <strong className="text-[14px] lg:text-[24px] font-medium leading-[32px]">
                        &#36; {truck.price}
                      </strong>
                    </div>
                  </div>

                  <div className="lg:flex">
                    <div className="flex lg:flex-row items-center  flex-wrap">
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
                      <p className="text-[14px] lg:text-[16px] mt-[0px]  ml-[4px] ">
                        Rating: {truck.rating}
                      </p>
                    </div>

                    <div className="flex items-center  flex-wrap">
                      <svg
                        className="fill-textPrimary ml-[0px] lg:ml-[16px]"
                        width="16"
                        height="16"
                      >
                        <use
                          className="w-[32px] h-[32px] "
                          href={`${spriteTrucks}#iconMapGrey`}
                        ></use>
                      </svg>
                      <p className="text-[14px] lg:text-[16px] ml-[4px]">
                        Location: {truck.location}
                      </p>
                    </div>
                  </div>

                  <p className="text-[14px] md:text-[16px] mt-[24px] line-clamp-1 text-textMonthPassed font-normal">
                    {truck.description}
                  </p>
                  <ul className="flex flex-wrap gap-[4px] md:gap-[8px] mt-[24px]">
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
                </div>
              </li>
            </Link>
          </div>
        ))}
      </ul>
    </>
  );
};

export default FavoritesPage;
