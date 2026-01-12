import { Link } from "react-router-dom";
import "./PageHeader.css";

function PageHeader({ title, image }) {
return (
<div className="page-header">
{/* Breadcrumb */}
<nav className="breadcrumb">
<Link to="/">الرئيسية</Link>
<span>/</span>
<span>{title}</span>
</nav>

{/* Image */}
<div className="header-image">
<img src={image} alt={title} />
</div>
</div>
);
}

export default PageHeader;
