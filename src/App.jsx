import Navbar from "./navbar";
import Footer from "./Footer";
import "./App.css";

import InfoCards from "./InfoCards";

/*import { useNavigate } from "react-router-dom";*/

function App() { /*const navigate = useNavigate();*/

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


<div className="map-container">
<img src="/Ksa-map.svg" className="map-image" />
</div>


<div
className="region region-riyadh"
onClick={() => navigate("/region/riyadh")}
>
<span className="region-label">الرياض</span>
</div>


<div className="region region-makkah">
<span className="region-label">مكة</span>
</div>

<div className="region region-asir">
<span className="region-label">عسير</span>
</div>

</div>
</div>

<InfoCards />
<Footer />


</>
);
} 
export default App;

