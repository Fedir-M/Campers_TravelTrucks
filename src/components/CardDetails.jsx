import { useDispatch, useSelector } from "react-redux";
import { getTruckByID } from "../redux/trucks/trucksOperations";
import { useEffect, useRef } from "react";
import {
  useParams,
  NavLink,
  Outlet,
  useLocation,
  // useNavigate,
  Link,
} from "react-router-dom";
import {
  truckDetailsSelector,
  // isLoadingSelector,
  // errorSelector,
  favoritesSelector,
} from "../redux/trucks/truckSelectors";
import {
  addToFavorites,
  removeFromFavorites,
} from "../redux/trucks/favoritesSlice";

// import Loader from "./Loader";
import spriteTrucks from "../assets/spriteTrucks.svg";
import TheForm from "./TheForm";
import Button from "./Button";
import IconForButton from "./IconForButton";

function CardDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const truckDetails = useSelector(truckDetailsSelector);
  // const isLoading = useSelector(isLoadingSelector);
  const favorites = useSelector(favoritesSelector);
  // const error = useSelector(errorSelector);

  const location = useLocation();
  const history = location.state?.from;
  const goBackBtn = useRef(history);

  useEffect(() => {
    console.log("Truck Details ==>", truckDetails);
    // console.log("Gallery ==>", truckDetails?.gallery);
    if (id) {
      dispatch(getTruckByID(id));
    }
  }, [dispatch, truckDetails, id]);

  const isFavorite = truckDetails ? favorites.includes(truckDetails.id) : false;

  const handleToggleFavorites = (truckId) => {
    if (favorites.includes(truckId)) {
      dispatch(removeFromFavorites(truckId));
    } else {
      dispatch(addToFavorites(truckId));
    }
  };

  // if (isLoading) {
  //   return <Loader />;
  // }

  if (!truckDetails) {
    return <p>No details available.</p>;
  }

  return (
    <main className=" px-[8px] pt-[8px] pb-[28px]  md:px-[14px] md:pt-[8px] md:py-[32px]  lg:px-[44px] lg:py-[48px]">
      <Link
        to={goBackBtn.current}
        icon="iconCircleLeft"
        // buttonLabel="GoBack"
        // onClick={() => handleGoBack()}
        className="inline-flex items-center gap-[6px] cursor-pointer font-medium text-[14px] lg:text-[26px] outline-0 hover:fill-ButtonHoverColor hover:text-ButtonHoverColor"
      >
        <IconForButton id="iconCircleLeft" iconW="24px" iconH="24px" />
        GoBack
      </Link>
      <section className="mt-[4px] lg:mt-[40px]">
        <div className="flex justify-between">
          <h1 className="text-[18px] lg:text-[24px] leading-[32px]">
            {truckDetails.name}
          </h1>
          <Button
            iconW="28px"
            iconH="28px"
            onClick={() => handleToggleFavorites(truckDetails.id)}
            icon="iconHeartBlack"
            className={`ml-[12px]  ${
              isFavorite ? "fill-heartColor" : "fill-textPrimary" //а тут было isActive, стало isFavorite
            }`}
          />
        </div>

        <div className="lg:flex mt-[8px]">
          <div className="flex lg:flex-row items-center  flex-wrap">
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
          </div>

          <div className="flex items-center  flex-wrap mt-[0px]">
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
            <p className="font-normal ml-[4px]">{truckDetails.location}</p>
          </div>
        </div>

        <div className="flex justify-center lg:justify-start">
          <strong className="text-[14px] lg:text-[24px] font-medium leading-[32px] mt-[8px] lg:mt-[16px] block">
            &#36; {truckDetails.price}
          </strong>
        </div>

        {/*-------------- Trucks Gallery --------------*/}
        {truckDetails.gallery && truckDetails.gallery.length > 0 ? (
          <div
            className="grid gap-2 mt-[8px] lg:mt-[28px]"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(292px, 1fr))",
            }}
          >
            {truckDetails.gallery.map((image, ind) => (
              <div
                key={ind}
                className="w-full aspect-[292/312] overflow-hidden rounded-[10px]"
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
        <p className="text-[14px] md:text-[16px] mt-[24px]  text-textMonthPassed font-normal">
          {truckDetails.description}
        </p>
      </section>

      <section
        className="flex justify-center lg:justify-normal mt-[60px] gap-[40px] border-b"
        style={{ borderColor: "var(--color-borderButtonColor)" }}
      >
        <NavLink
          to="features"
          className={({ isActive }) =>
            `text-[16px] font-medium pt-[8px] pb-[24px] ${
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
            `text-[16px] font-medium pt-[8px] pb-[24px] ${
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
      <div className="flex flex-col">
        <section className="flex flex-col md:flex-row md:gap-[20px] lg:gap-[40px]">
          <div className="max-w-[631px] order-1">
            <Outlet />
          </div>

          <section className="order-2 mt-[44px]">
            <TheForm />
          </section>
        </section>
      </div>
    </main>
  );
}

export default CardDetails;
