import { createPortal } from "react-dom"
import { motion } from "framer-motion";
import Btn from "../Buttons/Btn";


const Modal = ({ title, description,  onClose, onConfirm }) => {

  return createPortal(
    <>
      <div className="z-10 fixed top-0 left-0 w-[100%] h-[100vh] bg-[#000000bf] "/>
      <motion.dialog
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 20 }
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        open
  
        className="z-10 flex flex-col grid-6 text-center bg-[#FAFAFA] web:w-[582px] tablet:w-[450px] w-[282px] h-[500px]"
      >
        <div className="flex flex-col  h-[392px] pt-[64px] gap-[36px]" >
        <h2 className="text-[31px] font-medium ">{title}</h2>
        <p className="text-[16px] font-normal">{description}</p>
        </div>
        <div className="flex flex-row  justify-center space-x-10  h-[108px]">
              <Btn
              className="w-[127px] h-[44px] text-[16px] font-semibold"
                text="Close"
                onClick={onClose}
              />
              <Btn
              className="w-[127px] h-[44px] text-[16px] font-semibold"
                text="Confirm"
                onClick={onConfirm}
              />
            </div>
      </motion.dialog>
    </>,
    document.getElementById("createModal")

  )
}

export default Modal