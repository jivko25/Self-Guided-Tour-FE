import CardSkeleton from "./CardSceleton";
import SearchSkeleton from "./SearchSkeleton";
import SortSkeleton from "./SortSkeleton";

export default function ExploreSkeleton() {
  return (
    <div className="flex flex-col items-center mt-20 mb-20 tablet:mt-40 tablet:mb-0">
      <h1 className="mb-6 tablet:mb-16 text-xl tablet:text-3xl web:text-[39px] font-medium">
        Discover your next exciting trip
      </h1>
      <div className="mb-16 tablet:mb-[108px] web:mb-[136px] flex flex-col tablet:flex-row items-center gap-[21px] z-50">
        <SearchSkeleton />
        <SortSkeleton />
      </div>
      <h2 className="hidden web:inline-block self-start mb-9 text-[31px] font-medium">
        Explore Top Rated trips
      </h2>
      <div className="grid phone:grid-cols-2 web:grid-cols-4 webl:grid-cols-4 gap-x-[9px] tablet:gap-x-5 web:gap-x-6 gap-y-6 tablet:gap-y-16 mb-16 web:mb-[108px]">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  );
}
