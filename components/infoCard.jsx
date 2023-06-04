import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div className="flex my-2 py-7 px-4 space-x-4 rounded-xl hover:bg-gray-100 transition transform duration-200 ease-out shadow-md hover:shadow-lg border-y">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={img}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg"
          alt=""
        />
      </div>

      <div className="flex flex-col flex-grow px-5">
        <div className="flex items-center justify-between">
          <p className="text-gray-500">{location}</p>
          <HeartIcon className="h-5 cursor-pointer" />
        </div>

        <h4 className="text-xl">{title}</h4>
        <span className="border-b pt-2" />

        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

        <div className="flex justify-between items-end pt-5">
            <p className="flex items-center">
                <StarIcon className="h-5 text-[#EAD2AB]" />
                {star}
            </p>

            <div>
                <p className="text-xl font-semibold pb-2 lg:text-2xl">{price}</p>
                <p className="text-right font-light">{total}</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
