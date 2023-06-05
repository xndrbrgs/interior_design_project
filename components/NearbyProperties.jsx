"use client";

import Image from "next/image";
import defaultImage from "../assets/images/pexels-max-rahubovskiy-6969866.webp";
import { StarIcon } from "@heroicons/react/24/solid";

function nearbyProperties({
  id,
  title,
  rooms,
  baths,
  coverPhoto,
  title_l2,
  price,
  score,
  agency
}) {
  return (
    <div className="m-2 p-2 rounded hover:bg-gray-50 hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative h-32 w-full">
        <Image
          src={coverPhoto ? coverPhoto?.url : defaultImage}
          fill
          style={{ objectFit: "cover" }}
          alt="house cover photo"
        />
      </div>
      <div className="py-2">
        <h1 className="font-bold text-xl">${price}</h1>
        <h2 className="line-clamp-2">{title}</h2>
        <h3 className="text-gray-500">
          {rooms} beds | {baths} baths
        </h3>
        <p className="text-xs text-gray-500">{title_l2}</p>
        <div className="pt-2 flex items-center justify-between">
          <div className="flex items-center">
            <StarIcon className="h-5 text-[#EAD2AB]" />
            <p className="text-sm px-1">{score}</p>
          </div>
          <div>
            <p className="text-xs line-clamp-1">{agency?.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default nearbyProperties;
