import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import Btn from "../Buttons/Btn";

const Modal = ({ title, description, onClose, onConfirm }) => {
  return createPortal(
    <>
      <div className="z-10 fixed top-0 left-0  w-[100%] h-[100vh] bg-[#000000bf] " />
      <motion.dialog
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 20 },
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        open
        className="z-10 flex flex-col grid-6 text-center bg-[#FAFAFA] web:w-[582px] tablet:w-[450px] w-[282px] h-[440px] tablet:h-[500px]"
      >
        <div className="flex flex-col p-5 tablet:p-10 h-[300px] tablet:h-[392px] pt-[36px] tablet:pt-[64px] gap-[36px]">
          <h2 className="text-[20px] tablet:text-[31px] font-medium">{title}</h2>
          <p className="text-[16px] font-normal">{description}</p>
        </div>
        <div className="flex flex-col tablet:flex-row text-[16px] justify-center gap-y-6 tablet:space-x-10 px-6 tablet:px-0 h-[108px]">
          <div className="w-full tablet:w-32 h-11">
            <Btn variant="outlined" text="Close" onClick={onClose} fullWidth />
          </div>
          <div className="w-full tablet:w-32 h-11">
            <Btn text="Confirm" onClick={onConfirm} fullWidth />
          </div>
        </div>
      </motion.dialog>
    </>,
    document.getElementById("createModal")
  );
};

export default Modal;
