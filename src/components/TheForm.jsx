import Button from "./Button";

const TheForm = () => {
  return (
    <div className="flex flex-col max-w-[641px] border-[1px] border-borderButtonColor rounded-[10px] p-[44px]">
      <h2 className="text-[20px]">Book your campervan now</h2>
      <p className="text-textMonthPassed font-normal mt-[8px]">
        Stay connected! We are always ready to help you.
      </p>

      <form className="mt-[24px]">
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Name*"
          className="w-[100%] p-[18px] rounded-[12px] font-normal text-textPlaceholder bg-bgInputColor focus:outline-none focus:ring-1 focus:ring-borderButtonHoverColor"
          required
        />
        <input
          type="text"
          name="email"
          value={name}
          placeholder="Email*"
          className="w-[100%] p-[18px] rounded-[12px] font-normal text-textPlaceholder bg-bgInputColor mt-[14px] focus:outline-none focus:ring-1 focus:ring-borderButtonHoverColor"
          required
        />
        <input
          type=""
          name="date"
          value={name}
          placeholder="Booking date*"
          className="w-[100%] p-[18px] rounded-[12px] font-normal text-textPlaceholder bg-bgInputColor mt-[14px] focus:outline-none focus:ring-1 focus:ring-borderButtonHoverColor"
          required
        />
        <input
          type="text"
          name="comment"
          value={name}
          placeholder="Comment:"
          className="w-[100%] min-h-[150px] p-[18px] rounded-[12px] font-normal text-textPlaceholder bg-bgInputColor mt-[14px] focus:outline-none focus:ring-1 focus:ring-borderButtonHoverColor placeholder:-translate-y-[250%]"
        />
      </form>

      <div className="flex justify-center mt-[40px]">
        <Button
          buttonLabel="Send"
          type="submit"
          className="min-w-[173px] max-w-[250px] font-medium py-[16px] px-[48px] tracking-[-0.08px] leading-[1.5em] text-center text-textSecondary bg-ButtonPrimaryColor rounded-[200px] inline-flex items-center justify-center  hover:bg-linear-45 hover:from-[#3c9767] from-40% hover:to-[#ffc531] to-90% hover:shadow-lg hover:shadow-green-500/50 outline-0 focus:ring-2 focus:ring-green-500/50 focus:bg-ButtonHoverColor focus:shadow-lg focus:shadow-green-500/50 transition-colors duration-300 ease-in"
        />
      </div>
    </div>
  );
};

export default TheForm;
