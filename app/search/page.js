"use client";

import { useSearchParams } from "next/navigation";
import { format } from "date-fns";
import NavBar from "@/components/NavBar";

export default async function Search() {
  const searchParams = useSearchParams();
  const location = searchParams.get("location");
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");
  const noOfGuests = searchParams.get("noOfGuests");

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const dateRange = `${formattedStartDate} - ${formattedEndDate}`;

  const searchResults = await getSearchResults();

  return (
    <div>
      <NavBar
        placeholder={`${location} | ${dateRange} | ${noOfGuests} guests`}
      />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Rentals - {dateRange} - for {noOfGuests} Guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Rentals in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="filters">Cancellation Flexibility</p>
            <p className="filters">Type of Place</p>
            <p className="filters">Price</p>
            <p className="filters">Rooms and Beds</p>
            <p className="filters">Filters</p>
          </div>


        </section>
      </main>
    </div>
  );
}

async function getSearchResults() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS");
  if (!searchResults.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return searchResults.json();
}
