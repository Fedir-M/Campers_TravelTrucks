/* eslint-disable react/jsx-no-undef */

import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import TrucksList from "../components/TrucksList";
import { useEffect, useState } from "react";
import { fetchTrucksData } from "../redux/trucks/trucksOperations";

import {
  vehicleEquipmentFilters,
  vehicleTypeFilters,
} from "../services/vehicleFilters";
import {
  isLoadingSelector,
  trucksSelector,
} from "../redux/trucks/truckSelectors";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingSelector);
  // const isActive = useSelector(isActiveSelector);
  const trucks = useSelector(trucksSelector);

  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    dispatch(fetchTrucksData());
  }, [dispatch]);

  const handleLoadMore = (event) => {
    setVisibleCount((prevCount) => prevCount + 4);
    event.target.blur();

    // const handleButtonActiveClick = () => {
    //   dispatch(toggleButton());
    //   if (onclick) return onClick();
    // };
  };

  return (
    <main className="flex px-[64px] py-[48px]">
      <aside className="max-w-[488px] pb-[48px] pl-[64px] pr-[64px]">
        <p className="text-[#475467] font-normal leading-[24px]">Location</p>
        {/* <Input /> */}
        <p className="text-[#475467] font-medium leading-[24px] mt-[40px]">
          Filters
        </p>
        {/* Vehicle equipment */}
        <div className="mt-[32px]">
          <strong className="text-[20px]">Vehicle equipment</strong>
          <div
            className="border-t mt-[24px]"
            style={{ borderColor: "var(--color-borderButtonColor)" }}
          ></div>
          <ul className="flex flex-wrap items-center justify-center gap-x-[12px] gap-y-[8px] mt-[24px]">
            {vehicleEquipmentFilters.map((filterFeature, ind) => (
              <li key={ind}>
                <Button
                  buttonLabel={filterFeature.labelFilter}
                  icon={filterFeature.iconFilter}
                  className="buttonFilters leading-[24px]"
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Vehicle type */}
        <div className="mt-[32px]">
          <strong className="text-[20px]">Vehicle type</strong>
          <div
            className="border-t mt-[24px]"
            style={{ borderColor: "var(--color-borderButtonColor)" }}
          ></div>
          <ul className="flex flex-wrap items-center justify-center gap-x-[12px] gap-y-[8px] mt-[24px]">
            {vehicleTypeFilters.map((typeFilter, ind) => (
              <li key={ind}>
                <Button
                  buttonLabel={typeFilter.labelFilter}
                  icon={typeFilter.iconFilter}
                  className="buttonFilters leading-[24px]"
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Button Search */}
        <div className="flex items-center justify-center">
          <Button
            buttonLabel="Search"
            type="submit"
            className="min-w-[173px] max-w-[250px] py-[16px] px-[48px] tracking-[-0.08px] leading-[1.5em] text-center text-textSecondary bg-ButtonPrimaryColor rounded-[200px] inline-flex items-center justify-center  hover:bg-linear-45 hover:from-[#3c9767] from-40% hover:to-[#ffc531] to-90% hover:shadow-lg hover:shadow-green-500/50 outline-0 focus:ring-2 focus:ring-green-500/50 focus:bg-ButtonHoverColor focus:shadow-lg focus:shadow-green-500/50 transition-colors duration-300 ease-in mt-[40px]"
          />
        </div>
      </aside>

      <section className="max-w-[936px] ">
        <TrucksList visibleCount={visibleCount} />
        {/* Button "Load more" */}
        {!isLoading && trucks.length > visibleCount && (
          <div className="flex items-center justify-center">
            <Button
              onClick={handleLoadMore}
              buttonLabel="Load more"
              className="min-w-[173px] max-w-[250px] py-[16px] px-[48px] tracking-[-0.08px] leading-[1.5em] text-center text-textPrimary bg-bgPrimaryColor rounded-[200px] border border-borderButtonColor inline-flex items-center justify-center  hover:bg-linear-45 hover:from-[#dadde1] from-40% hover:to-[#ffc531] to-90% outline-0 focus:ring-2 focus:ring-green-500/50 focus:bg-ButtonHoverColor focus:shadow-lg focus:shadow-green-500/50 transition-colors duration-300 ease-in mt-[40px]"
            />
          </div>
        )}
      </section>
    </main>
  );
};

export default CatalogPage;
