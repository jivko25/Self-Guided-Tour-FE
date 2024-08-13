import { motion } from 'framer-motion';
import Image from 'next/image'
import successfulIcon from '../../public/svg/checkmark-circle.svg'
import erroricon from '../../public/svg/close-circle.svg'


const Popup = (props) => {

    const closePopup = () => {
        props.dispatch({
            type: 'REMOVE',
            id: props.id
        })
    }

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 }
            }}

            initial="hidden"
            animate="visible"
            exit="hidden"
            className={`flex flex-row justify-center items-center grip-2 w-[360px] h-[60px] tablet:w-[834px] tablet:h-[80px] web:w-[1920px] web:h-[100px] 
             ${props.type === 'SUCCESS' ? "bg-[#D0FFCF]" : 'bg-[#FFC1C1]'}`}>
            <p className="w-[24px] h-[24px] tablet:w-[40px] tablet:h-[40px]  web:w-[60px] web:h-[60px] content-center cursor-pointer"  onClick={closePopup}>
                <Image src={props.type== 'ERROR' ? erroricon : successfulIcon}  alt="Popup icon" />
            </p>

            <h3 className={`ml-[0.3rem] tablet:ml-[1rem] text-[16px] font-semibold tablet:text-[20px] tablet:font-medium ${props.type === 'SUCCESS' ? "text-[#037E00]" : 'text-[#AA0000]'}`} >{props.message}</h3>

        </motion.div>
    )
}

export default Popup