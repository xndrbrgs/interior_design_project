import { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

function Maps({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});

  // Transform intial coords from search results data into something that geoCenter can use
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 8,
  });

  return (
    <div className="w-full h-full overflow-hidden">
      <Map
        mapLib={import("mapbox-gl")}
        initialViewState={{
          ...viewport,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/suitecabe1/clihqj5m400l601qgduonffkt"
        mapboxAccessToken={process.env.mapbox_key}
      >
        {/* {searchResults.map((result) => (
          <div key={result.long}>
            <Marker
              longitude={result.long}
              latitude={result.lat}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <p
                onClick={() => setSelectedLocation(result)}
                className="cursor-pointer text-2xl animate-bounce"
              >
                📍
              </p>
            </Marker>
          </div>
        ))} */}
      </Map>
    </div>
  );
}

export default Maps;
