const SearchIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="icons / search-outline">
      <path
        id="Vector"
        d="M17.2728 5C14.8455 5 12.4727 5.71978 10.4545 7.06832C8.43623 8.41685 6.86322 10.3336 5.93433 12.5761C5.00544 14.8186 4.7624 17.2863 5.23594 19.6669C5.70949 22.0476 6.87834 24.2344 8.59471 25.9507C10.3111 27.6671 12.4978 28.836 14.8785 29.3095C17.2592 29.783 19.7268 29.54 21.9693 28.6111C24.2119 27.6822 26.1286 26.1092 27.4771 24.091C28.8257 22.0728 29.5454 19.7 29.5454 17.2727C29.5452 14.0178 28.2522 10.8963 25.9506 8.59481C23.6491 6.29328 20.5276 5.00021 17.2728 5V5Z"
        stroke="white"
        strokeMiterlimit="10"
      />
      <path
        id="Vector_2"
        d="M26.4288 26.4304L34.9999 35.0015"
        stroke="white"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

export default function SearchSkeleton() {
  return (
    <div className="flex justify-center items-center w-full px-5 animate-pulse">
      <div
        className="flex justify-center items-center w-full h-full
                    phone:max-w-[361px] phone:max-h-[36px]   
                    tablet:max-w-[590px] tablet:max-h-[60px]    
                    web:max-w-[884px] web:max-h-[60px]   
                    smallPhone:max-w-[288px] smallPhone:max-h-[36px]"
      >
        <div
          className="px-[10px] rounded-bl-[5px] rounded-[5px] border border-stone-300
                phone:w-[321px] h-[36px]  
                tablet:w-[516px] tablet:h-[60px] tablet:opacity-80  
                web:w-[810px] web:h-[60px] web:opacity-80
                smallPhone:w-[248px] smallPhone:h-[36px] disabled bg-[#e2e2e2] animate-pulse"
        >
        </div>
      </div>
    </div>
  );
}
