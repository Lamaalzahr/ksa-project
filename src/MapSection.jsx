import React, { useState } from "react";
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

export default MapSection;
