import { useParams } from "react-router-dom";

function RegionPage() {
  const { id } = useParams();

  return (
    <div className="region-page">
      
      {/* عنوان المنطقة */}
      <h1 className="region-title">منطقة الرياض</h1>

      {/* وصف */}
      <p className="region-description">
        تُعد منطقة الرياض قلب المملكة العربية السعودية، وتجمع بين
        التاريخ العريق والنهضة الحديثة، وتضم معالم سياحية وثقافية متنوعة.
      </p>

      {/* كاردز المعالم */}
      <section className="region-cards">
        <div className="card">قصر المصمك</div>
        <div className="card">بوليفارد الرياض</div>
        <div className="card">الدرعية التاريخية</div>
      </section>

      {/* نصائح */}
      <section className="region-tips">
        <h3>نصائح للزوار</h3>
        <ul>
          <li>أفضل وقت للزيارة من أكتوبر إلى مارس</li>
          <li>استخدم وسائل النقل الحديثة داخل المدينة</li>
          <li>احجز الفعاليات مسبقًا</li>
        </ul>
      </section>

    </div>
  );
}

export default RegionPage;
