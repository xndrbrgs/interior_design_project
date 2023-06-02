import React from "react";
import Image from "next/image";

function MediumCard({ img, title }) {
  return (
    <div className="rounded-xl cursor-pointer hover:scale-105 transition transform duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image
          src={img}
          fill
          style={{ objectFit: "contain" }}
          className="rounded-lg"
        />
      </div>
      <div>
        <h3 className="text-2xl mt-3">{title}</h3>
      </div>
    </div>
  );
}

export default MediumCard;
