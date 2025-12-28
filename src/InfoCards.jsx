// InfoCards.jsx
import { 
Check, Plane, CloudSun, Sun, Shield, CreditCard, DollarSign, AtSign, 
Globe, AlertTriangle, Info 
} from "lucide-react";
import "./InfoCards.css";

function InfoCards() {
return (
<div className="cards-container">

<div className="info-card blue">
<div className="card-header">
<Plane size={22} />
<h3 className="card-title blue-title">التأشيرة السياحية</h3>
</div>
<ul className="card-list">
<li><Check size={18} /> التأشيرة الإلكترونية متاحة لأكثر من 50 دولة</li>
<li><Check size={18} /> صالحة لمدة سنة واحدة مع إمكانية دخول متعدد</li>
<li><Check size={18} /> يمكن الإقامة حتى 90 يوماً في كل زيارة</li>
<li><Check size={18} /> يمكن التقديم عبر الإنترنت في دقائق</li>
</ul>
</div>

<div className="info-card orange">
<div className="card-header orange-header">
<CloudSun size={22} />
<h3 className="card-title orange-title">أفضل وقت للزيارة</h3>
</div>
<div className="season-card">
<div className="season-title">
<CloudSun size={18} />
<span>الشتاء (أكتوبر - مارس)</span>
</div>
<p>مثالي لمعظم المناطق، طقس معتدل ومريح للسياحة</p>
</div>
<div className="season-card">
<div className="season-title">
<Sun size={18} />
<span>الصيف (يونيو - سبتمبر)</span>
</div>
<p>مناسب لعسير والباحة، طقس رائع في الجبال</p>
</div>
</div>

<div className="info-card green-light">
<div className="card-header green-header">
<Shield size={22} />
<h3 className="card-title green-title">الأمان والسلامة</h3>
</div>
<ul className="card-list">
<li><Check size={18} /> المملكة من أكثر الدول أماناً في العالم</li>
<li><Check size={18} /> نظام طوارئ متطور متاح على مدار الساعة</li>
<li><Check size={18} /> مراكز شرطة سياحية في المدن الرئيسية</li>
</ul>
</div>

<div className="info-card purple">
<div className="card-header purple-header">
<DollarSign size={22} />
<h3 className="card-title purple-title">العملة والدفع</h3>
</div>
<ul className="card-list">
<li><DollarSign size={18} /> العملة الرسمية: الريال السعودي (SAR)</li>
<li><CreditCard size={18} /> بطاقات الائتمان مقبولة في معظم الأماكن</li>
<li><AtSign size={18} /> أجهزة الصراف الآلي متوفرة في كل مكان</li>
</ul>
</div>

<div className="info-card mint">
<div className="card-header mint-header">
<Globe size={22} />
<h3 className="card-title mint-title">اللغة والتواصل</h3>
</div>
<ul className="card-list white-list">
<li>🗣️ اللغة الرسمية: العربية</li>
<li>🌍 الإنجليزية متحدثة على نطاق واسع في المدن الرئيسية</li>
<li>📱 تطبيقات الترجمة مفيدة جداً</li>
</ul>
</div>

<div className="info-card red">
<div className="card-header red-header">
<AlertTriangle size={22} />
<h3 className="card-title red-title">أرقام الطوارئ</h3>
</div>
<div className="emergency-card white-card">
<span>🚨 الطوارئ</span>
<p>911</p>
</div>
<div className="emergency-card white-card">
<span>🚑 الإسعاف</span>
<p>997</p>
</div>
<div className="emergency-card white-card">
<span>👮 الشرطة</span>
<p>999</p>
</div>
</div>

<div className="info-card yellow-light">
<div className="card-header yellow-header">
<Info size={22} />
<h3 className="card-title yellow-title">نصائح للسياح</h3>
</div>
<ul className="card-list white-list">
<li>احترم العادات والتقاليد المحلية</li>
<li>ارتدِ ملابس محتشمة في الأماكن العامة</li>
<li>استخدم واقي الشمس ومياه الشرب</li>
<li>جرب المطبخ السعودي التقليدي</li>
<li>احجز الفنادق والرحلات مسبقاً</li>
<li>استمتع بكرم الضيافة السعودية</li>
</ul>
</div>

</div>
);
}

export default InfoCards;
