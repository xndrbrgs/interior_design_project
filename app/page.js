import Banner from "@/components/Banner";
import SmallCard from "@/components/SmallCard";

export default async function Home() {
  const exploreData = await getStaticProps();
  return (
    <>
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">
            View Properties Nearby
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
          
        </section>
      </main>
    </>
  );
}

async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G");
  if (!exploreData.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return exploreData.json();
}
