"use client";
import React from "react";
import CardSphera from "../components/HomePage/CardSphera/CardSphera";
import { useRouter } from "next/navigation";
import sofia from "../public/images/sofia.png";
import plovdiv from "../public/images/plovdiv.png";
import veliko from "../public/images/velikoturnovo.png";
import ruse from "../public/images/ruse.png";
import varna from "../public/images/varna.png";
import burgas from "../public/images/burgas.png";
import stara from "../public/images/starazagora.png";
import pleven from "../public/images/pleven.png";
import vidin from "../public/images/vidin.png";
import kurdjali from "../public/images/kurdjali.png";
import nesebar from "../public/images/nesebar.png";
import sozopol from "../public/images/sozopol.png";
import pomorie from "../public/images/pomorie.png";
import panagiurishte from "../public/images/panagiurishte.png";
import koprivshtica from "../public/images/koprivshtica.png";
import trqvna from "../public/images/trqvna.png";
import shumen from "../public/images/shumen.png";
import kazanlak from "../public/images/kazanlak.png";
import troqn from "../public/images/troqn.png";
import gabrovo from "../public/images/gabrovo.png";
import sandanski from "../public/images/sandanski.png";
import melnik from "../public/images/melnik.png";
import belogradchik from "../public/images/belogradchik.png";
import hisarq from "../public/images/hisarq.png";
import karlovo from "../public/images/karlovo.png";
import sliven from "../public/images/sliven.png";
import lovech from "../public/images/lovech.png";
import kiustendil from "../public/images/kiustendil.png";
import pernik from "../public/images/pernik.png";
import vraca from "../public/images/vraca.png";

function page() {
  const router = useRouter();

  const exploreBiggestCities = [
    {
      thumbnailImageUrl: sofia,
      destination: "Sofia",
    },
    {
      thumbnailImageUrl: plovdiv,
      destination: "Plovdiv",
    },
    {
      thumbnailImageUrl: veliko,
      destination: "Veliko Tarnovo",
    },
    {
      thumbnailImageUrl: ruse,
      destination: "Ruse",
    },
    {
      thumbnailImageUrl: varna,
      destination: "Varna",
    },
    {
      thumbnailImageUrl: burgas,
      destination: "Burgas",
    },
    {
      thumbnailImageUrl: stara,
      destination: "Stara Zagora",
    },
    {
      thumbnailImageUrl: pleven,
      destination: "Pleven",
    },
    {
      thumbnailImageUrl: vidin,
      destination: "Vidin",
    },
    {
      thumbnailImageUrl: kurdjali,
      destination: "Kurdjali",
    },
    {
      thumbnailImageUrl: nesebar,
      destination: "Nesebar",
    },
    {
      thumbnailImageUrl: sozopol,
      destination: "Sozopol",
    },
    {
      thumbnailImageUrl: pomorie,
      destination: "Pomorie",
    },
    {
      thumbnailImageUrl: panagiurishte,
      destination: "Panaguirishte",
    },
    {
      thumbnailImageUrl: koprivshtica,
      destination: "Koprivshtitsa",
    },
    {
      thumbnailImageUrl: trqvna,
      destination: "Triavna",
    },

    {
      thumbnailImageUrl: shumen,
      destination: "Shumen",
    },
    {
      thumbnailImageUrl: kazanlak,
      destination: "kazanlak",
    },
    {
      thumbnailImageUrl: troqn,
      destination: "Troyan",
    },
    {
      thumbnailImageUrl: gabrovo,
      destination: "Gabrovo",
    },
    {
      thumbnailImageUrl: sandanski,
      destination: "Sandanski",
    },
    {
      thumbnailImageUrl: melnik,
      destination: "Melnik",
    },
    {
      thumbnailImageUrl: belogradchik,
      destination: "Belogradchik",
    },
    {
      thumbnailImageUrl: hisarq,
      destination: "Hisarya",
    },
    {
      thumbnailImageUrl: karlovo,
      destination: "Karlovo",
    },
    {
      thumbnailImageUrl: sliven,
      destination: "Sliven",
    },
    {
      thumbnailImageUrl: lovech,
      destination: "Lovech",
    },
    {
      thumbnailImageUrl: kiustendil,
      destination: "Kiustendil",
    },
    {
      thumbnailImageUrl: pernik,
      destination: "Pernik",
    },
    {
      thumbnailImageUrl: vraca,
      destination: "Vratza",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center p-4 w-full h-full phone:p-[10px] tablet:p-[20px] smallPhone:p-[0px]">
      <h1 className="text-center text-[#081120] web:text-[39px] tablet:text-[35px] phone:text-[25px] smallPhone:text-[20px] font-medium font-['Inter'] leading-[58.50px] web:my-[100px] tablet:my-[70px] phone:my-[30px] smallPhone:my-[30px]">
        Discover your next exiting trip
      </h1>
      <div className="flex flex-col w-full h-full p-6 phone:p-[0px] tablet:p-[10px] smallPhone:p-[0px]">
        <h4 className="flex w-full justify-start items-start text-[#081120] web:text-[31px] tablet:text-[31px] phone:text-[20px] smallPhone:text-[16px] font-medium font-['Inter'] mb-[50px] pl-[10px]">
          Explore Biggest Towns in Bulgaria
        </h4>
        <div className="flex w-full items-center justify-center web:gap-[100px] tablet:gap-[50px] phone:gap-[30px] smallPhone:gap-[0px] pb-[100px] flex-wrap">
          {exploreBiggestCities.map((place, index) => (
            <div
              key={index}
              className="
                web:w-[300px]
                tablet:w-[180px]
                phone:w-[100px]
                smallPhone:w-[100px]
                mb-[30px]
                "
            >
              <CardSphera
                thumbnailImageUrl={place.thumbnailImageUrl}
                destination={place.destination}
                onClick={() =>
                  router.push(`/explore?search=${place.destination}`)
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
