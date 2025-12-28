import Navbar from "./navbar";
import Footer from "./Footer";
import "./App.css";
import InfoCards from "./InfoCards";
import MapSection from "./MapSection";

function App() { 
return (
<>
<Navbar />

<div className="hero">
<div className="hero-content">
<div className="text-content">
<h2>اكتشف جمال المملكة العربية السعودية</h2>
<h3>رحلة عبر 13 منطقة، ثقافة غنية، وتراث أصيل</h3>
<h5>فقط انقر على المنطقة المُراد استكشافها</h5>
</div>
</div>
</div>

<div className="map-container">
<MapSection />
</div>
<InfoCards />
<Footer />


</>
);
} 
export default App;

