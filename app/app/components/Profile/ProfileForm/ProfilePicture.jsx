import Camera from "@/app/public/svg/camera.svg";
import Image from "next/image";
function ProfilePicture({ src }) {
  return !src ? (
    <div className="border w-[185px] h-[174px] flex items-center justify-center">
      <Image width={60} height={60} alt="Profile picture" src={Camera} />
    </div>
  ) : (
    <Image
      width={185}
      height={174}
      alt="Profile picture"
      src={src}
      className=" h-[174px] w-[185px] border object-cover"
      priority
    />
  );
}

export default ProfilePicture;
