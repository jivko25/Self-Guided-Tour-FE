function ImageSkeleton({ isLoading }) {
  if (!isLoading) {
    return null;
  }
  return (
    <div className="w-[309px] h-[240px] bg-gray-400 animate-pulse rounded-[5px]"></div>
  );
}

export default ImageSkeleton;
