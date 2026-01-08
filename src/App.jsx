import Navbar from "./navbar";
import Footer from "./Footer";
import "./App.css";

//import InfoCards from "./InfoCards";
//import MapSection from "./MapSection";

import { Routes, Route } from "react-router-dom";
import RegionPage from "./RegionPage";

import MainLayout from "./layouts/MainLayout";
import RegionLayout from "./layouts/RegionLayout";
import HomePage from "./HomePage";


function App() { 
return (
<>
<Navbar />

{/*<div className="hero">
<div className="hero-content">
<div className="text-content">
<h2>اكتشف جمال المملكة العربية السعودية</h2>
<h3>رحلة عبر 13 منطقة، ثقافة غنية، وتراث أصيل</h3>
<h5>فقط انقر على المنطقة المُراد استكشافها</h5>
</div>
</div>
</div>*/}

{/*<div className="map-container">
<MapSection />
</div>*/}

 <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        <Route element={<RegionLayout />}>
          <Route path="/region/:id" element={<RegionPage />} />
        </Route>
      </Routes>

 
  <Footer />
  
</>
);
} 
export default App;

