import { useDispatch, useSelector } from "react-redux";
import {
  favoritesSelector,
  trucksSelector,
} from "../redux/trucks/truckSelectors";

import Button from "../components/Button";
import IconForButton from "../components/IconForButton";
import categoriesFeaturesLibrary from "../services/categoriesFeaturesLibrary";
import CategoriesFeaturesLabels from "../components/CategoriesFeaturesLabels";
import { removeFromFavorites } from "../redux/trucks/favoritesSlice";
import { Link } from "react-router";

const FavoritesPage = () => {
  const trucks = useSelector(trucksSelector);
  const favorites = useSelector(favoritesSelector);

  const dispatch = useDispatch();

  const handleAddRemoveFavorites = (truckId) => {
    if (favorites.includes(truckId)) {
      dispatch(removeFromFavorites(truckId));
    }
  };

  const favoriteTrucks = trucks.filter((truck) => favorites.includes(truck.id));

  return (
    <div>
      <ul className="flex flex-col gap-[6px] mt-[8px] px-[64px]">
        {favoriteTrucks.map((truck) => (
          <Link
            key={truck.id}
            to={`/catalog/${truck.id}`}
            className="outline-0 focus:ring-2  focus:ring-textAccent hover:ring-2 hover:ring-textAccent hover: rounded-[20px]"
          >
            <li
              className="flex p-[14px] border-[1px] rounded-[20px]"
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
                      className="ml-[12px] w-[24px] h-[24px] fill-heartColor"
                    />

                    <IconForButton />
                  </div>
                </div>
                <p className="mt-[8px]">Rating: {truck.rating}</p>
                <p>Location: {truck.location}</p>
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
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesPage;
