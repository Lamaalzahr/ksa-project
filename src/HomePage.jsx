import MapSection from "./MapSection";
import InfoCards from "./InfoCards";

function HomePage() {
return (
<>
<div className="hero">
<div className="hero-content">
<div className="text-content">
<h2>اكتشف جمال المملكة العربية السعودية</h2>
<h3>رحلة عبر 13 منطقة، ثقافة غنية، وتراث أصيل</h3>
<h5>فقط انقر على المنطقة المُراد استكشافها</h5>
</div>
</div>
</div>

{/* الخريطة هنا 👇 */}
<div className="map-container">
<MapSection />
</div>

<InfoCards />
</>
);
}

export default HomePage;
