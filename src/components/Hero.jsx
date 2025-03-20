// import heroImage1x from "../../src/assets/images/hero-image@1x.webp";
// import heroImage1x from "../assets/images/hero-image@1x.webp";
// import heroImage2x from "../assets/images/hero-image@2x.webp";

import { Link } from "react-router";

function Hero() {
  return (
    <section className="relative w-full h-screen hero p-[80px]">
      {/* <div className="w-full h-full">
        <img src={heroImage1x} alt="microbus in the wood" className="w-full" />
        <div className="heroFilter w-full absolute left-0 top-0"></div>
      </div> */}
      <div className=" flex justify-center items-center mt-[50%] lg:mt-[0%] lg:absolute lg:left-0 lg:top-[50%] lg:translate-y-[-50%] ">
        <div className="flex flex-col justify-center items-center lg:pl-[64px]">
          <h1
            className="inline-flex text-textSecondary leading-[28px] text-[34px] 
          text-center whitespace-normal sm:text-[38px] md:text-[48px] md:leading-[24px]  lg:text-[48px] lg:text-left xl:text-[48px]"
          >
            Campers of your dreams
          </h1>
          <strong className="text-textSecondary mt-[16px] text-[14px] text-center whitespace-normal sm:text-[18px] md:text-[24px] lg:text-left">
            You can find everything you want in our catalog
          </strong>
          <Link
            to="catalog"
            className="mt-[80px] min-w-[173px] max-w-[250px] font-medium py-[16px] px-[48px] tracking-[-0.08px] leading-[1.5em] text-center text-textSecondary bg-ButtonPrimaryColor rounded-[200px] inline-flex items-center justify-center  hover:bg-linear-45 hover:from-[#3c9767] from-40% hover:to-[#ffc531] to-90% hover:shadow-lg hover:shadow-green-500/50 outline-0 focus:ring-2 focus:ring-green-500/50 focus:bg-ButtonHoverColor focus:shadow-lg focus:shadow-green-500/50 transition-colors duration-300 ease-in lg:mt-[40px]"
          >
            View Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;

// bg-[url(./assets/images/hero-image@1x.webp)]

// bg-linear-gradient(to_right_bottom,rgba(49,84,44,0.8),rgba(16,71,52,0.8)),url('../src/images/icon-bg.jpg')]

// style={{
//   backgroundImage:
//     "linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url('../assets/images/hero-image@1x.webp')",
// }}

{
  /* <div className="flex flex-col pl-[64px]">
          <h1 className="text-textSecondary mt-[260px] text-[48px]">
            Campers of your dreams
          </h1>
          <strong className="text-textSecondary mt-[16px] text-[24px]">
            You can find everything you want in our catalog
          </strong>
          <Link
            to="catalog"
            className="min-w-[173px] max-w-[250px] font-medium py-[16px] px-[48px] tracking-[-0.08px] leading-[1.5em] text-center text-textSecondary bg-ButtonPrimaryColor rounded-[200px] inline-flex items-center justify-center  hover:bg-linear-45 hover:from-[#3c9767] from-40% hover:to-[#ffc531] to-90% hover:shadow-lg hover:shadow-green-500/50 outline-0 focus:ring-2 focus:ring-green-500/50 focus:bg-ButtonHoverColor focus:shadow-lg focus:shadow-green-500/50 transition-colors duration-300 ease-in mt-[40px]"
          >
            View Now
          </Link>
        </div> */
}
