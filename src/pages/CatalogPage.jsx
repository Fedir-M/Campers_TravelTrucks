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
import InputFilter from "../components/InputFilter";
import { applyFilters } from "../services/applyFilters";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingSelector);
  // const isActive = useSelector(isActiveSelector);
  const trucks = useSelector(trucksSelector);

  const initialFilterState = {
    location: "",
    transmission: "",
    engine: "",
    AC: false,
    bathroom: false,
    kitchen: false,
    TV: false,
    radio: false,
    refrigerator: false,
    microwave: false,
    gas: false,
    water: false,
    form: [],
    Automatic: false,
    Petrol: false,
    Van: false,
    "Fully Integrated": false,
    Alcove: false,
  };

  const [visibleCount, setVisibleCount] = useState(4);
  const [formInput, setFormInput] = useState(initialFilterState);
  const [filteredTrucks, setFilteredTrucks] = useState([]);
  const [submittedFilters, setSubmittedFilters] = useState(initialFilterState);

  useEffect(() => {
    dispatch(fetchTrucksData());
  }, [dispatch]);

  useEffect(() => {
    setFilteredTrucks(trucks);
  }, [trucks]);

  // const handleButtonActiveClick = () => {
  //   dispatch(toggleButton());
  //   if (onclick) return onClick();
  // };

  const handleLoadMore = (event) => {
    setVisibleCount((prevCount) => prevCount + 4);
    event.target.blur();
  };

  // ================ Processing InputCatalogFilter ================

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prev) => ({ ...prev, [name]: value }));
  };
  // ================ Processing EquipmentFilter buttons ================
  const handleEquipmentFilterClick = (filterName) => {
    setFormInput((prev) => ({
      ...prev,
      [filterName]: !prev[filterName],
    }));
  };
  // ================ Processing Vehicle type buttons ================
  const handleVehicleTypeClick = (formType) => {
    setFormInput((prev) => ({
      ...prev,
      [formType]: !prev[formType],
    }));
  };

  // ============= Final stage of filters processing =============

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Filters applied:", formInput);
    console.log("Trucks before filtering:", trucks);
    const filtered = applyFilters(trucks, formInput);
    console.log("Filtered trucks:", filtered);
    setFilteredTrucks(filtered);
    setVisibleCount(4);
  };

  return (
    <section className="flex px-[64px] py-[48px]">
      <aside className="max-w-[488px] pb-[48px] pl-[64px] pr-[64px]">
        <form onSubmit={handleSubmit}>
          <p className="text-[#475467] font-normal leading-[24px]">Location</p>
          {/* ==================== Input filter ==================== */}
          <InputFilter
            name="location"
            placeholder="Location"
            onInputChange={handleInputChange}
          />
          <p className="text-[#475467] font-medium leading-[24px] mt-[40px]">
            Filters
          </p>

          {/* ==================== Vehicle equipment ==================== */}
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
                    onClick={() =>
                      handleEquipmentFilterClick(filterFeature.labelFilter)
                    }
                    className={`buttonFilters ${
                      formInput[filterFeature.labelFilter]
                        ? "buttonFiltersActive"
                        : ""
                    }`}
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* =========================== Vehicle type =========================== */}
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
                    onClick={() =>
                      handleVehicleTypeClick(typeFilter.labelFilter)
                    }
                    className={`buttonFilters ${
                      formInput[typeFilter.labelFilter]
                        ? "buttonFiltersActive"
                        : ""
                    }`}
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
        </form>
      </aside>

      <section className="max-w-[936px] ">
        <TrucksList
          visibleCount={visibleCount}
          filteredTrucks={filteredTrucks}
        />
        {/* Button "Load more" */}
        {!isLoading && filteredTrucks.length > visibleCount && (
          <div className="flex items-center justify-center">
            <Button
              onClick={handleLoadMore}
              buttonLabel="Load more"
              className="min-w-[173px] max-w-[250px] py-[16px] px-[48px] tracking-[-0.08px] leading-[1.5em] text-center text-textPrimary bg-bgPrimaryColor rounded-[200px] border border-borderButtonColor inline-flex items-center justify-center  hover:bg-linear-45 hover:from-[#dadde1] from-40% hover:to-[#ffc531] to-90% outline-0 focus:ring-2 focus:ring-green-500/50 focus:bg-ButtonHoverColor focus:shadow-lg focus:shadow-green-500/50 transition-colors duration-300 ease-in mt-[40px]"
            />
          </div>
        )}
      </section>
    </section>
  );
};

export default CatalogPage;
