import IconButton from "../Buttons/IconButton";
function ActionButtons({
  firstAction,
  secondAction,
  firstActionHandler,
  secondActionHandler,
}) {
  return (
    <div className="w-[38px] h-[30px] rounded-[5px] border-2 border-[#13294B] mr-6 tablet:h-10 tablet:w-[48px] flex justify-center content-center text-center">
      <IconButton text="" icon={firstAction} className="m-0" spaceBetween={0} />
    </div>
  );
}

export default ActionButtons;
