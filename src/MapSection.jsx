{/*import React, { useState } from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

function MapSection() {
const [viewState, setViewState] = useState({
latitude: 24,
longitude: 45,
zoom: 5,
});

return (
<Map
{...viewState}
onMove={(evt) => setViewState(evt.viewState)}
style={{ width: "100%", height: "500px" }}
mapStyle="mapbox://styles/mapbox/streets-v12"
mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
>
<Marker latitude={24.7136} longitude={46.6753} />
</Map>
);
}

export default MapSection;*/}

import Map, { Source, Layer } from "react-map-gl";
import { useNavigate } from "react-router-dom";
import regions from "./data/regions";
import "mapbox-gl/dist/mapbox-gl.css";

function MapPage() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    const feature = e.features?.[0];
    if (!feature) return;

    navigate(`/region/${feature.properties.id}`);
  };

  return (
    <Map
      mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
      initialViewState={{
        longitude: 44,
        latitude: 23,
        zoom: 5
      }}
      style={{ width: "100vw", height: "100vh" }}
      mapStyle="mapbox://styles/mapbox/light-v11"
      interactiveLayerIds={["regions-layer"]}
      onClick={handleClick}
    >
      <Source id="regions" type="geojson" data={regions}>
        <Layer
          id="regions-layer"
          type="circle"
          paint={{
            "circle-radius": 8,
            "circle-color": "#ff4d6d"
          }}
        />
      </Source>
    </Map>
  );
}

export default MapPage;
