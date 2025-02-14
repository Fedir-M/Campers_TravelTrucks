import { Link } from "react-router";
import Button from "./Button";
import { useSelector } from "react-redux";
import { trucksSelector } from "../redux/trucks/truckSelectors";

import categoriesFeaturesLibrary from "../services/categoriesFeaturesLibrary";
import CategoriesFeaturesLabels from "./CategoriesFeaturesLabels";
// import { useEffect } from "react";
// import { fetchTrucksData } from "../redux/trucks/trucksOperations";

// eslint-disable-next-line react/prop-types
const TrucksList = ({ visibleCount }) => {
  const trucks = useSelector(trucksSelector);

  const visibleTrucks = trucks.slice(0, visibleCount);

  //   console.log(trucks);

  return (
    <div>
      {/* <h1>Track List</h1> */}
      <ul className="flex flex-col gap-[6px] ">
        {visibleTrucks.map((truck) => (
          <li
            key={truck.id}
            className="flex p-[14px] border-[1px] rounded-[20px]"
            style={{ borderColor: "var(--color-borderButtonColor)" }}
          >
            <img
              src={truck.gallery[0]?.thumb || "https://defaultPicture"} // еще не делал, потом
              alt={`${truck.name} preview`}
              className="max-w-[292px] max-h-[320px] object-cover rounded-[10px]"
            />
            <div className="ml-[24px] ">
              <h2>{truck.name}</h2>
              <p className="mt-[8px]">Rating: {truck.rating}</p>
              <p>Location: {truck.location}</p>
              <p className="mt-[24px] line-clamp-1">
                Description: {truck.description}
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
        ))}
      </ul>
      <Button />
    </div>
  );
};

export default TrucksList;
