import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // <-- مهم
import Map, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

function MapSection() {
  const navigate = useNavigate(); // <--- نستخدمه للتنقل
  const [viewState, setViewState] = useState({
    latitude: 24,
    longitude: 45,
    zoom: 5,
  });

  const [showPopup, setShowPopup] = useState(false); // لعرض نص عند hover/ضغط

  // بيانات النقاط / المناطق
  const regions = [
    {
      id: "riyadh",
      name: "الرياض",
      latitude: 24.7136,
      longitude: 46.6753,
    },
    // ممكن تضيفين مناطق ثانية هنا لاحقًا
    // { id: "jeddah", name: "جدة", latitude: 21.4858, longitude: 39.1979 }
  ];

  return (
    <Map
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
      style={{ width: "100%", height: "500px" }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
    >
      {regions.map((region) => (
        <div key={region.id}>
          <Marker
  latitude={region.latitude}
  longitude={region.longitude}
  anchor="bottom" // هذا مهم عشان المسمار يكون فوق النقطة الصحيحة
>
  <div
    style={{
      width: "40px",
      height: "60px",
      position: "relative",
      cursor: "pointer",
      transform: "translate(100%, 270%)", // لضبط المسمار تمام
    }}
    >
        <div
        style={{
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            border: "2px solid white",
            overflow: "hidden",
            backgroundColor: "green",
            postion: "absolute",
            tob: 0,
            left: "50%",
            transform: "translateX(-50%)",
        }}
        >
   {/*</div> onClick={() => navigate(`/region/${region.id}`)}
    onMouseEnter={() => setShowPopup(region.id)}
    onMouseLeave={() => setShowPopup(false)*/}
  
    <img
      src="/region-image.png"  // الصورة التي تريدين إضافتها داخل الدائرة
      alt="region"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  </div>
</Marker>


          {/* Popup يظهر عند hover */}
          {showPopup === region.id && (
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
        </div>
      ))}
    </Map>
  );
}

export default MapSection;
