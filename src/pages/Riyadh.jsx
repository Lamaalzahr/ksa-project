import { useParams } from "react-router-dom";
import "./Riyadh.css";
import Breadcrumb from "./Breadcrumb";

function RiyadhRegionPage() {
const { id } = useParams();

return (
<div className="region-page">
<div className="region-header">

<Breadcrumb
items={[
{ label: "الصفحة الرئيسية", to: "/" },
{ label: "منطقة الرياض" }, // الحالي
]}
/>

{/* ===== الهيدر ===== */}
<div className="region-header">
<h1 className="region-title">منطقة الرياض</h1>
<p className="region-description">
تُعد منطقة الرياض قلب المملكة العربية السعودية، وتمزج بين
التاريخ العريق والنهضة الحديثة، وتضم معالم سياحية وثقافية متنوعة.
</p>
<div className="header-cta">
<button className="btn-explore">استكشف الآن</button>
</div>
</div>
</div>
{/* ===== أبرز المعالم السياحية ===== */}
<section className="region-places">
<h2 className="section-title">أبرز المعالم السياحية</h2>
<div className="region-cards">
<div className="card">
<img src="/images/masmak.jpg" alt="قصر المصمك" />
<h3>قصر المصمك</h3>
</div>
<div className="card">
<img src="/images/boulevard.jpg" alt="بوليفارد الرياض" />
<h3>بوليفارد الرياض</h3>
</div>
<div className="card">
<img src="/images/diriyah.jpg" alt="الدرعية التاريخية" />
<h3>الدرعية التاريخية</h3>
</div>
</div>
</section>

{/* ===== نصائح للزوار ===== */}
<section className="region-tips">
<h2 className="section-title">نصائح للزوار</h2>
<ul className="tips-list">
<li>أفضل وقت للزيارة من أكتوبر إلى مارس</li>
<li>استخدم وسائل النقل الحديثة داخل المدينة</li>
<li>احجز الفعاليات مسبقًا</li>
</ul>
</section>
</div>
);
}

export default RiyadhRegionPage;
