import { useState } from "react";
import "./Navbar.css";
import VisaInfoDrawer from "./VisaInfoDrawer";

function Navbar() {
const [open, setOpen] = useState(false);
return (
<>
<nav className="navbar">
<h1>مناطق المملكة</h1>

<button
className="menu-btn"
onClick={() => setOpen(true)}
>
☰
</button>
</nav>

{open && (
<div
className="overlay"
onClick={() => setOpen(false)}
></div>
)}

<div className={`side-menu ${open ? "open" : ""}`}>
<button
className="close-btn"
onClick={() => setOpen(false)}
>
✕
</button>

<div className="drawer">

<VisaInfoDrawer />
</div>

<div className="menu-item">الرئيسية</div>

<div className="menu-item">
المناطق
<div className="submenu">
<div className="submenu-item">منطقة الرياض</div>
<div className="submenu-item">منطقة مكة</div>
<div className="submenu-item">منطقة المدينة</div>
<div className="submenu-item">منطقة عسير</div>
</div>
</div>


<div className="menu-item">تواصل معنا</div>
</div>

</>
);
}

export default Navbar;
