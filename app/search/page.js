import React from "react";

function Search() {
  return (
    <div>
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">300+ Rentals for 5 Guests</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Rentals in Mars</h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="filters">
              Cancellation Flexibility
            </p>
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

export default Search;
