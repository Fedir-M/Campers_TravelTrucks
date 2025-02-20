import { useDispatch, useSelector } from "react-redux";
import { getTruckByID } from "../redux/trucks/trucksOperations";
import { useEffect } from "react";
import { useParams, NavLink, Outlet } from "react-router";
import {
  truckDetailsSelector,
  isLoadingSelector,
  errorSelector,
} from "../redux/trucks/truckSelectors";

import Loader from "./Loader";
import spriteTrucks from "../assets/spriteTrucks.svg";
import TheForm from "./TheForm";

function CardDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const truckDetails = useSelector(truckDetailsSelector);
  const isLoading = useSelector(isLoadingSelector);
  const error = useSelector(errorSelector);

  useEffect(() => {
    console.log("Truck Details ==>", truckDetails);
    // console.log("Gallery ==>", truckDetails?.gallery);
    if (id) {
      dispatch(getTruckByID(id));
    }
  }, [dispatch, id]);

  if (isLoading) {
    return <Loader />;
  }

  if (!truckDetails) {
    return <p>No details available.</p>;
  }

  return (
    <main className=" px-[64px] py-[48px]">
      <section>
        <h1 className="text-[24px] leading-[32px]">{truckDetails.name}</h1>
        <div className="flex flex-wrap items-center mt-[8px]">
          <svg
            className={`w-[16px] h-[16px] ${
              truckDetails.reviews && truckDetails.reviews.length > 0
                ? "fill-starColor"
                : "fill-bgBadgeColor"
            }`}
          >
            <use
              className="w-[32px] h-[32px] "
              href={`${spriteTrucks}#iconStarGrey`}
            ></use>
          </svg>
          <p className="font-normal ml-[4px]">
            {truckDetails.rating}(
            {`${truckDetails.reviews.length} Review${
              truckDetails.reviews.length > 1 ? "s" : ""
            }`}
            )
          </p>

          <svg className="fill-textPrimary ml-[16px]" width="16" height="16">
            <use
              className="w-[32px] h-[32px] "
              href={`${spriteTrucks}#iconMapGrey`}
            ></use>
          </svg>
          <p className="font-normal ml-[4px]">{truckDetails.location}</p>
        </div>

        <strong className="text-[24px] font-medium leading-[32px] mt-[16px] block">
          &#8364; {truckDetails.price}
        </strong>
        {/*-------------- Trucks Gallery --------------*/}
        {truckDetails.gallery && truckDetails.gallery.length > 0 ? (
          <div
            className="grid gap-2 mt-[28px]"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(292px, 1fr))",
            }}
          >
            {truckDetails.gallery.map((image, ind) => (
              <div
                key={ind}
                className="w-[292px] aspect-[292/312] overflow-hidden rounded-[10px]"
              >
                <img
                  src={image.thumb}
                  alt={`${truckDetails.name}_preview-${ind + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        ) : (
          <p>Smth went wrong. Make refresh.</p>
        )}

        {/*-------------- / Trucks Gallery --------------*/}
        <p className="mt-[24px] line-clamp-1  text-textMonthPassed font-normal">
          {truckDetails.description}
        </p>
      </section>
      <section
        className="flex mt-[60px] gap-[40px] border-b"
        style={{ borderColor: "var(--color-borderButtonColor)" }}
      >
        <NavLink
          to="features"
          className={({ isActive }) =>
            `text-[16px] font-medium pb-[8px] pb-[24px] ${
              isActive
                ? "border-b-[5px] border-heartColor mb-[-3px]"
                : "border-b-[0px] border-borderButtonColor"
            }`
          }
        >
          Features
        </NavLink>
        <NavLink
          to="reviews"
          className={({ isActive }) =>
            `text-[16px] font-medium pb-[8px] pb-[24px] ${
              isActive
                ? "border-b-[5px] border-heartColor mb-[-3px]"
                : "border-b-[0px] border-borderButtonColor "
            }`
          }
        >
          Reviews
        </NavLink>
      </section>
      {/*-------------- NavLink's Outlet --------------*/}
      <section className="flex">
        <div className="max-w-[631px]">
          <Outlet />
        </div>
        <section className="mt-[44px]">
          <TheForm />
        </section>
      </section>
    </main>
  );
}

export default CardDetails;
