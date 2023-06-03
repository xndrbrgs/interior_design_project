"use client";

import { useState } from "react";
import Image from "next/image";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import {
  GlobeAltIcon,
  Bars3Icon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import Link from "next/link";

function NavBar() {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setnoOfGuests] = useState(1);

  const handleSelect = (ranges) => {
    console.log(ranges);
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  const resetInput = () => {
    setSearchInput("");
  };

  return (
    <div className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 items-center">
      <div className="relative flex items-center my-auto">
        <Link href='/'>
          <Image
            src="https://i.ibb.co/PMgmb5d/logo.png"
            width={200}
            height={200}
          />
        </Link>
      </div>

      {/* Input Field  */}
      <div className="flex items-center border-2 rounded-full py-2 md:shadow-sm ">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder="Start your search"
          className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-[#EAD2AB] text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* Right Side */}
      <div className="flex space-x-4 justify-end text-gray-500 items-center">
        <p className="cursor-pointer hidden md:inline">How it works</p>
        <GlobeAltIcon className="h-6  cursor-pointer" />
        <div className="flex space-x-2 border-2 rounded-full p-2 items-center cursor-pointer hover:shadow-lg transition">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto pt-2">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#EAD2AB"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="font-bold flex-grow">Guests</h2>

            <UsersIcon className="h-5" />
            <input
              type="number"
              className="w-12 pl-2 text-md"
              value={noOfGuests}
              onChange={(e) => setnoOfGuests(e.target.value)}
              min={1}
            />
          </div>
          <div className="flex my-2">
            <button
              className="flex-grow text-gray-400 border-2 rounded-full py-2 hover:shadow-lg transition"
              onClick={resetInput}
            >
              Cancel
            </button>
            <button className="flex-grow bg-[#EAD2AB] border-2 rounded-full py-2 hover:shadow-lg transition">
              Search
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
