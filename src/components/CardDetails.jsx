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
        <p className="mt-[8px]">Rating: {truckDetails.rating}</p>
        <p>Location: {truckDetails.location}</p>
        <strong className="text-[24px] font-medium leading-[32px]">
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
        <p className="mt-[24px] line-clamp-1">{truckDetails.description}</p>
      </section>
      <section
        className="flex mt-[60px] gap-[40px] border-b pb-[24px]"
        style={{ borderColor: "var(--color-borderButtonColor)" }}
      >
        <NavLink>Features</NavLink>
        <NavLink>Reviews</NavLink>
        {/*-------------- NavLink's Outlet --------------*/}
        <Outlet />
      </section>
      <section className="mt-[44px]">
        <form action="">The Form</form>
      </section>
    </main>
  );
}

export default CardDetails;
