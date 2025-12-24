{/*import { useState } from "react"; 
import { X, Plane, Shield, CreditCard, Globe, Clock, Phone } from "lucide-react";

export function TouristInfo({ onClose }) {
return (
<div
className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
onClick={onClose}
>
<div
className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
onClick={(e) => e.stopPropagation()}
dir="rtl"
>

<div className="bg-gradient-to-r from-green-700 to-emerald-700 text-white p-6 sticky top-0 z-10">
<div className="flex items-center justify-between">
<h2 className="text-white">معلومات سياحية مهمة</h2>
<button
onClick={onClose}
className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all"
>
<X className="w-5 h-5" />
</button>
</div>
</div>


<div className="p-6 space-y-6">

<div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200">
<div className="flex items-center gap-3 mb-4">
<div className="bg-blue-600 p-3 rounded-xl">
<Plane className="w-6 h-6 text-white" />
</div>
<h3 className="text-blue-900">التأشيرة السياحية</h3>
</div>
<ul className="space-y-2 text-blue-900">
<li>التأشيرة الإلكترونية متاحة لأكثر من 50 دولة</li>
<li>صالحة لمدة سنة واحدة مع إمكانية دخول متعدد</li>
<li>يمكن الإقامة حتى 90 يوماً في كل زيارة</li>
<li>يمكن التقديم عبر الإنترنت في دقائق</li>
</ul>
</div>


<div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-200">
<div className="flex items-center gap-3 mb-4">
<div className="bg-orange-600 p-3 rounded-xl">
<Clock className="w-6 h-6 text-white" />
</div>
<h3 className="text-orange-900">أفضل وقت للزيارة</h3>
</div>
<div className="grid md:grid-cols-2 gap-4">
<div className="bg-white rounded-lg p-4">
<h4 className="text-orange-800 mb-2">🌤️ الشتاء (أكتوبر - مارس)</h4>
<p className="text-orange-900 text-sm">مثالي لمعظم المناطق، طقس معتدل ومريح للسياحة</p>
</div>
<div className="bg-white rounded-lg p-4">
<h4 className="text-orange-800 mb-2">☀️ الصيف (يونيو - سبتمبر)</h4>
<p className="text-orange-900 text-sm">مناسب لعسير والباحة، طقس رائع في الجبال</p>
</div>
</div>
</div>


<div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
<div className="flex items-center gap-3 mb-4">
<div className="bg-green-600 p-3 rounded-xl">
<Shield className="w-6 h-6 text-white" />
</div>
<h3 className="text-green-900">الأمان والسلامة</h3>
</div>
<ul className="space-y-2 text-green-900">
<li>المملكة من أكثر الدول أماناً في العالم</li>
<li>نظام طوارئ متطور متاح على مدار الساعة</li>
<li>مراكز شرطة سياحية في المدن الرئيسية</li>
</ul>
</div>


<div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
<div className="flex items-center gap-3 mb-4">
<div className="bg-purple-600 p-3 rounded-xl">
<CreditCard className="w-6 h-6 text-white" />
</div>
<h3 className="text-purple-900">العملة والدفع</h3>
</div>
<ul className="space-y-2 text-purple-900">
<li>العملة الرسمية: الريال السعودي (SAR)</li>
<li>بطاقات الائتمان مقبولة في معظم الأماكن</li>
<li>أجهزة الصراف الآلي متوفرة في كل مكان</li>
</ul>
</div>


<div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 border border-teal-200">
<div className="flex items-center gap-3 mb-4">
<div className="bg-teal-600 p-3 rounded-xl">
<Globe className="w-6 h-6 text-white" />
</div>
<h3 className="text-teal-900">اللغة والتواصل</h3>
</div>
<ul className="space-y-2 text-teal-900">
<li>اللغة الرسمية: العربية</li>
<li>الإنجليزية متحدثة على نطاق واسع في المدن الرئيسية</li>
<li>تطبيقات الترجمة مفيدة جداً</li>
</ul>
</div>


<div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl p-6 border border-red-200">
<div className="flex items-center gap-3 mb-4">
<div className="bg-red-600 p-3 rounded-xl">
<Phone className="w-6 h-6 text-white" />
</div>
<h3 className="text-red-900">أرقام الطوارئ</h3>
</div>
<div className="grid md:grid-cols-3 gap-3">
<div className="bg-white rounded-lg p-4 text-center">
<p className="text-red-800 mb-1">🚨 الطوارئ</p>
<p className="text-red-600">911</p>
</div>
<div className="bg-white rounded-lg p-4 text-center">
<p className="text-red-800 mb-1">🚑 الإسعاف</p>
<p className="text-red-600">997</p>
</div>
<div className="bg-white rounded-lg p-4 text-center">
<p className="text-red-800 mb-1">👮 الشرطة</p>
<p className="text-red-600">999</p>
</div>
</div>
</div>


<div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 border border-amber-200">
<h3 className="text-amber-900 mb-4">💡 نصائح للسياح</h3>
<ul className="grid md:grid-cols-2 gap-3">
<li>احترم العادات والتقاليد المحلية</li>
<li>ارتدِ ملابس محتشمة في الأماكن العامة</li>
<li>استخدم واقي الشمس ومياه الشرب</li>
<li>جرب المطبخ السعودي التقليدي</li>
<li>احجز الفنادق والرحلات مسبقاً</li>
<li>استمتع بكرم الضيافة السعودية</li>
</ul>
</div>
</div>
</div>
</div>
);
}
*/}
import { X, Plane, Shield, CreditCard, Globe, Clock, Phone } from "lucide-react";

export default function VisaInfoDrawer({ onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose}>
          <X />
        </button>

        <h2>Visa Info</h2>
      </div>
    </div>
  );
}
