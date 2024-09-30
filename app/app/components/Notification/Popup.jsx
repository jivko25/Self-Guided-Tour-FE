import { motion } from "framer-motion";
import Image from "next/image";
import successfulIcon from "../../public/svg/checkmark-circle.svg";
import erroricon from "../../public/svg/close-circle.svg";

const Popup = (props) => {
  const closePopup = () => {
    props.dispatch({
      type: "REMOVE",
      id: props.id,
    });
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className={`flex flex-row   justify-center items-center p-4 rounded-sm mb-2    mx-2 w-full  h-fit
             ${props.type === "SUCCESS" ? "bg-[#D0FFCF]" : "bg-[#FFC1C1]"}`}
    >
      <p
        className="w-6 h-6 content-center cursor-pointer tablet:w-10 tablet:h-10 web:w-[60px] web:h-[60px]"
        onClick={closePopup}
      >
        <Image
          src={props.type == "ERROR" ? erroricon : successfulIcon}
          alt="Popup icon"
        />
      </p>

      <h3
        className={`ml-[0.3rem]  tablet:ml-[1rem] text-base font-semibold tablet:text-xl tablet:font-medium ${
          props.type === "SUCCESS" ? "text-[#037E00]" : "text-[#AA0000]"
        }`}
      >
        {props.message}
      </h3>
    </motion.div>
  );
};

export default Popup;
