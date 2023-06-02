"use client";

import React, { useEffect, useState } from "react";
import { ReactLenis, useLenis } from "../utils/lenis";
import Banner from "@/components/Banner";

function ScrollableContentHome() {
  useLenis((lenis) => {
    // console.log('Current page progress', lenis.progress)
  });

  return (
    <>
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">
            View Properties Nearby
          </h2>

          {/* Pull from API */}
        </section>
      </main>
    </>
  );
}

function Home() {
  // state change simulation to test deps
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((v) => v + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useLenis(
    ({ scroll }) => {
      // console.log('Current scroll position', scroll, count)
    },
    [count],
    1
  );

  return (
    <ReactLenis root options={{}}>
      <ScrollableContentHome />
    </ReactLenis>
  );
}

export default Home;
