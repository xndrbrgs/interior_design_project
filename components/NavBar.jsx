import React from "react";
import Image from "next/image";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import {
  GlobeAltIcon,
  Bars3Icon,
  UsersIcon,
} from "@heroicons/react/24/outline";

function NavBar() {
  return (
    <div className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 items-center">
      <div className="relative flex items-center cursor-pointer my-auto">
        <Image
          src="https://i.ibb.co/PMgmb5d/logo.png"
          width={200}
          height={200}
        />
      </div>

      <div className="flex items-center border-2 rounded-full py-2 md:shadow-sm ">
        <input
          type="text"
          placeholder="Start your search"
          className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-gray-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      <div className="flex space-x-4 justify-end text-gray-500 items-center">
        <p className="cursor-pointer hidden md:inline">How it works</p>
        <GlobeAltIcon className="h-6  cursor-pointer" />
        <div className="flex space-x-2 border-2 rounded-full p-2 items-center  cursor-pointer">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
