import pencil from "../../public/svg/pencil.svg";
import Image from "next/image.js";

export default function LocationComponent({ count, text , draggable, onDragStart, onDragEnter, onDragEnd, onDragOver }) {
    return (
        <div className="mt-[20px] border border-[0.5px] borcer-color-[#CECECE] rounded-md cursor-move" draggable={draggable} onDragStart={onDragStart} onDragEnter={onDragEnter} onDragEnd={onDragEnd} onDragOver={onDragOver}>
            <div className="flex flex-row items-center">
                <div
                    className="bg-[#617086] text-center text-[#FFFFFF] w-[35px] h-[60px] content-center text-[16px]
                            border border-[0.5px] borcer-color-[#CECECE] rounded-md tablet:w-[40px] tablet:h-[40px]
                            tablet:text-[20px]"
                >
                    {count && <span>{count}</span>}
                </div>
                {text && <p className="text-left pl-[10px] pr-[30px] w-[100%] font-normal">
                    {text}
                </p>}
                <Image
                    className="pr-[10px]"
                    src={pencil}
                    width={36}
                    height={36}
                    alt="pencil"
                />
            </div>
        </div>
    );
}