import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import LargeCard from "@/components/LargeCard";
import MediumCard from "@/components/MediumCard";
import SmallCard from "@/components/SmallCard";

export default async function Home() {
  const exploreData = await getExploreData();
  const cardsData = await getCardsData();
  return (
    <>
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold">View Properties Nearby</h2>
          <h2 className="text-lg text-gray-500 pb-5">
            Popular listings in the area
          </h2>

          {/* Pull from API */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        <section>
          <LargeCard
            img="https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440"
            title="The Greatest Outdoors"
            description="Wishlists curated by RentAHome"
            buttonText="Get Inspired"
          />
        </section>
      </main>
    </>
  );
}

async function getExploreData() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G");
  if (!exploreData.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return exploreData.json();
}

async function getCardsData() {
  const cardsData = await fetch("https://www.jsonkeeper.com/b/VHHT");
  if (!cardsData.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return cardsData.json();
}
