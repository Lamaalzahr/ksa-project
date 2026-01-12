import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Map, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

function MapSection() {
const navigate = useNavigate();

const [viewState, setViewState] = useState({
latitude: 24,
longitude: 45,
zoom: 5,
});

const [hoveredRegion, setHoveredRegion] = useState(null);

const regions = [
{
id: "riyadh",
name: "الرياض",
latitude: 24.7117,
longitude: 46.6740,
image: "/Ryiadh.png",
},
];

return (
<Map
{...viewState}
onMove={(e) => setViewState(e.viewState)}
style={{ width: "100%", height: "500px" }}
mapStyle="mapbox://styles/mapbox/streets-v12"
mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
>
{regions.map((region) => (
<Marker
key={region.id}
latitude={region.latitude}
longitude={region.longitude}
anchor="bottom"
>
{/* جسم الدبوس */}
<div
onClick={() => navigate(`/region/${region.id}`)}
onMouseEnter={() => setHoveredRegion(region.id)}
onMouseLeave={() => setHoveredRegion(null)}
style={{
width: "40px",
height: "60px",
position: "relative",
cursor: "pointer",
transform: "translate(-50%, -100%)", // ⭐ الوحيد المسموح
}}
>
{/* الدائرة */}
<div
style={{
width: "26px",
height: "26px",
borderRadius: "50%",
border: "3px solid white",
overflow: "hidden",
backgroundColor: "green",
position: "absolute",
top: "0",
left: "50%",
transform: "translateX(-50%)",
zIndex: 2,
}}
>
<img
src={region.image}
alt={region.name}
style={{ width: "100%", height: "100%", objectFit: "cover" }}
/>
</div>

{/* رأس الدبوس */}
<div
style={{
width: 0,
height: 0,
borderLeft: "12px solid transparent",
borderRight: "12px solid transparent",
borderTop: "32px solid green",
position: "absolute",
top: "24px",
left: "50%",
transform: "translateX(-50%)",
}}
/>
</div>

{/* Popup */}
{hoveredRegion === region.id && (
<Popup
latitude={region.latitude}
longitude={region.longitude}
closeButton={false}
closeOnClick={false}
anchor="top"
>
{region.name}
</Popup>
)}
</Marker>
))}
</Map>
);
}

export default MapSection;
