import "./Footer.css";

function Footer() {
return (
<footer className="footer">
<div className="footer-container">

<div className="footer-section">
<h3>عن المملكة</h3>
<p>
المملكة العربية السعودية وجهة سياحية متنوعة تجمع بين التراث الغني والحداثة المتطورة</p>
</div>

<div className="footer-section">
<h3>معلومات مهمة </h3>
<p> ✓ التأشيرة السياحية متاحة لأكثر من 50 دولة </p>
<p> ✓ طقس معتدل من أكتوبر إلى مارس </p>
<p>✓ وجهة آمنة ومضيفة </p>
</div>

<div className="footer-section">
<h3>روابط سريعة</h3>
<ul>
<li><a href="#">الرئيسية</a></li>
<li><a href="#">المناطق</a></li>
<li><a href="#">المعالم</a></li>
<li><a href="#">تواصل معنا</a></li>
</ul>
</div>

<div className="footer-section">
<h3>تابعنا</h3>
<div className="social">
<a href="#">Twitter</a>
<a href="#">LinkedIn</a>
</div>
</div>

</div>

<div className="footer-bottom">
<p>© 2025 جميع الحقوق محفوظة</p>
</div>
</footer>
);
}

export default Footer;
