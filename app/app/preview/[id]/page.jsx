"use client";

import Btn from "@/app/components/Buttons/Btn";
import GoogleMaps from "@/app/components/GoogleMaps/GoogleMaps";
import Link from "next/link";
import Image from "next/image";
import { useCreateTour } from "@/app/context/createTourContext";
import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { getOne } from "@/app/actions/tourActions";
import { usePopup } from "@/app/context/popupContext";
import ArrowRedo from "../../public/svg/arrow-redo.svg";
import Pencil from "../../public/svg/pencil.svg";
import Play from "../../public/svg/play.svg";
import X from "../../public/svg/X.svg";

const IOSTypes = {
  driving: "d",
  walking: "w",
  bicycling: "w",
};

export default function Preview() {
  const { id } = useParams();
  const { formData } = useCreateTour();
  const [title, setTitle] = useState("");
  const [locations, setLocations] = useState([]);
  const [tourType, setTourType] = useState("");
  const popup = usePopup();

  useEffect(() => {
    if (id == 0) {
      setTitle(formData.step1Data.tour);
      setTourType(formData.step1Data.tourType);

      const newArr = formData.step2Data.map((loc) => {
        return {
          locationName: loc.location,
          description: loc.locationDescription,
          latitude: loc.latitude,
          longitude: loc.longitude,
          audio: loc.addFields.filter(
            (file) =>
              file.name.endsWith(".mp3") ||
              file.name.endsWith(".wav") ||
              file.name.endsWith(".aac") ||
              file.name.endsWith(".flac") ||
              file.name.endsWith(".ogg")
          ),
          video: loc.addFields.filter(
            (file) =>
              file.name.endsWith(".mp4") ||
              file.name.endsWith(".avi") ||
              file.name.endsWith(".mkv") ||
              file.name.endsWith(".mov") ||
              file.name.endsWith(".wmv") ||
              file.name.endsWith(".flv")
          ),
        };
      });

      setLocations(newArr);
    } else {
      getOne(id).then((result) => {
        const { data, error } = result;

        if (data) {
          setTitle(data.title);
          setTourType(data.tourType);

          const newData = data.landmarks.map((loc) => {
            return {
              locationName: loc.locationName,
              description: loc.description,
              latitude: loc.latitude,
              longitude: loc.longitude,
              audio: loc.resources.filter(
                (file) => file.resourceType === "Audio"
              ),
              video: loc.resources.filter(
                (file) => file.resourceType === "Video"
              ),
            };
          });

          setLocations(newData);
        } else {
          popup({
            type: "ERROR",
            message: error.message,
          });
        }
      });
    }
  }, [id, formData, setLocations]);

  const handleNavigation = (locationData, multiple = false) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;
          const device = getUserDeviceType();
          const type = tourType.toLowerCase();
          let url = "";

          if (!multiple) {
            const lat = locationData.latitude;
            const lng = locationData.longitude;

            if (device === "android") {
              // Open Google Maps app if available on Android
              url = `geo:${userLat},${userLng}?q=${lat},${lng}&travelmode=${type}`;
            } else if (device === "ios") {
              // Open in Apple Maps on iOS devices
              url = `http://maps.apple.com/?saddr=${userLat},${userLng}&daddr=${lat},${lng}&dirflg=${IOSTypes[type]}`;
            } else {
              // Open Google Maps in the browser on desktop or other devices
              url = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${lat},${lng}&travelmode=${type}`;
            }
          } else {
            const destination = locationData[locationData.length - 1];
            const rest = locationData.slice(0, locationData.length - 1);

            if (device === "android") {
              // Open Google Maps app if available on Android
              const waypoints = rest.map((loc) => {
                return `&daddr=${loc.latitude},${loc.longitude}`;
              });

              url = `geo:${userLat},${userLng}?q=${lat},${lng}(%22Start%22)${waypoints}&travelmode=${type}`;
            } else if (device === "ios") {
              // Open in Apple Maps on iOS devices
              const waypoints = rest.map((loc) => {
                return `&daddr${loc.latitude},${loc.longitude}`;
              });
              url = `http://maps.apple.com/?saddr=${userLat},${userLng}${waypoints}&daddr=${destination.latitude},${destination.longitude}&dirflg=${IOSTypes[type]}`;
            } else {
              const waypoints = rest.map((loc) => {
                return `${loc.latitude},${loc.longitude}`;
              });

              // Open Google Maps in the browser on desktop or other devices
              url = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${
                destination.latitude
              },${destination.longitude}&waypoints=${waypoints.join(
                "|"
              )}&travelmode=${type}`;
            }
          }

          window.open(url, "_blank");
        },
        (error) => {
          popup({
            type: "ERROR",
            message: "Unable to retrieve your location.",
          });
        }
      );
    } else {
      popup({
        type: "ERROR",
        message: "Geolocation is not supported by this browser.",
      });
      setError();
    }
  };

  const getUserDeviceType = () => {
    if (navigator.userAgent) {
      const isAndroid = /Android/i.test(navigator.userAgent);
      const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

      if (isAndroid) {
        return "android";
      }

      if (isIOS) {
        return "ios";
      }
    }

    return "browser";
  };

  const handleTourTypeChange = (tourType) => {
    setTourType(tourType);
  };

  return (
    <>
      <header className="hidden w-[90%] web:flex flex-row justify-between items-center mt-16 mb-32">
        <h1 className="text-[39px] font-medium flex">
          Tour Locations
          <span className="block w-0.5 h-[59px] bg-[#617086] mx-9"></span>
          {title}
        </h1>
        <Link className="flex flex-row items-start gap-3" href={`/edit/${id}`}>
          <Image src={Pencil} width={24} height={24} alt="Edit tour" />
          <span className="hidden tablet:inline text-[16px] font-semibold">
            Edit Tour
          </span>
        </Link>
      </header>
      <div
        className="w-full h-full web:relative mt-24 tablet:mt-[151px] web:mt-[64px] 
                  px-[8px] phone:px-[16px] tablet:px-[125px] web:px-[56px]"
      >
        <section
          className="flex flex-col align-center text-[14px]
                    mb-[30px] web:mb-0 font-medium text-[#081120] text-[14px] web:text-[16px]
                    web:h-[582px] web:w-1/2"
        >
          <div className="overflow-y-scroll web:pr-[40px] web:mr-[80px]">
            <header className="flex flex-row justify-between mb-9 tablet:mb-6 web:hidden">
              <div>
                <h2 className="text-[24px] tablet:text-[31px] font-medium mb-2 tablet:mb-[22px]">
                  Tour locations
                </h2>
                <p className="font-medium text-[18px] tablet:text-[24px]">
                  {title}
                </p>
              </div>
              <Link
                className="flex flex-row items-start gap-3"
                href={`/edit/${id}`}
              >
                <Image src={Pencil} width={24} height={24} alt="Edit tour" />
                <span className="hidden tablet:inline text-[16px] font-semibold">
                  Edit Tour
                </span>
              </Link>
            </header>
            <section
              className="h-[250px] phone:h-[297px] tablet:h-[476px] mb-[12px] web:w-1/2 web:h-[582px] 
                            web:absolute web:right-[60px] web:top-0"
            >
              <GoogleMaps
                directions={{ tourType, locations }}
                handleTourTypeChange={handleTourTypeChange}
              />
            </section>
            <section className="flex flex-wrap w-[100%] gap-6 mt-[36px] tablet:mt-[24px] web:mt-[36px]">
              {locations.length > 0 && (
                <ul className="text-[16px] text-[#13294B]">
                  {locations.map((loc, i) => (
                    <li
                      key={i}
                      className="relative ml-5 before:absolute before:block before:content-[''] 
                                before:bg-[#617086] before:w-[0.5px] before:top-0 before:bottom-0
                                before:top-[15px] pb-[64px] last:pb-[0px]"
                    >
                      <div className="absolute -left-[7px] w-[15px] h-[15px] border-[0.5px] rounded-full border-[#617086]"></div>
                      <div className="ml-6">
                        <span className="font-light mb-2">
                          Location {i + 1}
                        </span>
                        <h3 className="font-medium text-[18px] text-[#081120] mb-4">
                          {loc.locationName}
                        </h3>
                        <div className="font-semibold text-[#4285F4] flex flex-col-reverse tablet:flex-row gap-y-3 gap-x-8 items-start tablet:gap-x-11 mb-6 ml-2 tablet:ml-6">
                          {(loc.audio.length > 0 || loc.video.length > 0) && (
                            <div>
                              {loc.audio.length > 0 && (
                                <>
                                  {loc.audio.map((audioFile, i) => (
                                    <MediaPlayer
                                      key={i}
                                      file={audioFile}
                                      count={i + 1}
                                    />
                                  ))}
                                </>
                              )}
                              {loc.video.length > 0 && (
                                <>
                                  {loc.video.map((videoFile, i) => (
                                    <MediaPlayer
                                      key={i}
                                      isVideo={true}
                                      file={videoFile}
                                      count={i + 1}
                                    />
                                  ))}
                                </>
                              )}
                            </div>
                          )}
                          <div
                            className="flex items-center gap-3 cursor-pointer"
                            onClick={handleNavigation.bind(null, loc, false)}
                          >
                            <Image
                              src={ArrowRedo}
                              width={24}
                              height={24}
                              alt="Location directions"
                            />
                            <span>Show directions</span>
                          </div>
                        </div>
                        <p className="text-[14px] phone:max-w-[300px] tablet:max-w-[400px]">
                          {loc.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </div>
        </section>
        <div className="web:border-t border-[#E7EAED] mb-[130px] tablet:mb-0">
          <div className="web:w-1/2">
            <div
              className="web:w-[100%] mt-[64px] tablet:mt-[19px] tablet:mb-[38px] web:mt-[36px] web:mb-[59px] 
            flex flex-col tablet:flex-row-reverse gap-6 tablet:gap-5 web:gap-6 tablet:justify-center"
            >
              <Btn
                className="w-full tablet:w-[182px] web:w-[220px] webl:w-[278px] h-[44px] font-semibold"
                variant="filled"
                text="Play Tour"
                onClick={handleNavigation.bind(null, locations, true)}
              />
              <Btn
                className="w-full tablet:w-[182px] web:w-[220px] webl:w-[278px] h-[44px] font-semibold"
                variant="outlined"
                text="Back"
                link={id == 0 ? "/create" : `/tour/${id}`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Audio and video player
const MediaPlayer = ({ isVideo = false, file, count }) => {
  const mediaRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (file.hasOwnProperty("resourceUrl")) {
      setUrl(file.resourceUrl);
    } else {
      setUrl(URL.createObjectURL(file));
    }
  }, [file, setUrl]);

  const handlePlay = () => {
    mediaRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    mediaRef.current.pause();
    setIsPlaying(false);
  };
  return (
    <>
      {!isVideo ? (
        <>
          {!isPlaying && (
            <div
              className="flex items-center gap-x-3 cursor-pointer"
              onClick={handlePlay}
            >
              <Image src={Play} width={16} height={18} alt="Play audio" />
              <span>Play Audio {count}</span>
            </div>
          )}
          {url && (
            <audio
              className="w-[200px] phone:w-[280px]"
              ref={mediaRef}
              controls
              hidden={!isPlaying}
              onPause={handlePause}
              preload="metadata"
              playsInline
              src={url}
            >
              Cannot play audio!
            </audio>
          )}
        </>
      ) : (
        <div>
          <div
            className="flex items-center gap-x-3 cursor-pointer"
            onClick={handlePlay}
          >
            <Image src={Play} width={16} height={18} alt="Play audio" />
            <span>Play Video {count}</span>
          </div>

          <div
            className={`fixed ${
              isPlaying ? "flex flex-col" : "hidden"
            } items-center justify-center top-0 bottom-0 left-0 right-0 bg-[#000000]/80 z-50`}
          >
            <div className="flex flex-col justify-center items-center rounded-3xl px-10 mx-2 text-[#081120] bg-[#FAFAFA]">
              <div className="flex justify-end w-full mb-2 mt-5 border-b-2">
                <Image
                  className="w-6 h-6 tablet:w-10 tablet:h-10 border rounded-full text-center mb-3"
                  onClick={handlePause}
                  width={14}
                  height={14}
                  src={X}
                  alt="Close video"
                />
              </div>
              {url && (
                <video
                  className="w-full opacity-100 mx-10 mb-10"
                  ref={mediaRef}
                  onPlay={handlePlay}
                  controls
                  preload="metadata"
                  playsInline
                  src={url}
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
