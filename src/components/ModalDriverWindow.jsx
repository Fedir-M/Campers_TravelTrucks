import clsx from "clsx";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const ModalDriverWindow = ({ isOpen, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Очищаем эффект при размонтировании компонента
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  return (
    <div
      className={clsx(
        "lg:hidden fixed w-full h-full mt-[72px] px-0 z-19 right-0 -top-full flex flex-col items-center  bg-textMonthPassed opacity-98  duration-500  max-h-[calc(100vh-72px-env(safe-area-inset-bottom))] overflow-y-auto",
        isOpen && "top-0"
      )}
    >
      {children}
    </div>
  );
};

export default ModalDriverWindow;
