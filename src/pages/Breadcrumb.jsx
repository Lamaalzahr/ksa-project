import { Link } from "react-router-dom";
import "./Breadcrumb.css";

function Breadcrumb({ items }){
return(
<nav className="breadcrumb">

{items.map((item, index) => (
<span key={index}>

{item.to ? (
<Link to={item.to}>{item.label}</Link>
) : (
<span className="current">{item.label}</span>
)}
{index < items.label - 1 && <span className="separator">›</span>}
</span>
))}
</nav>
);
}
export default Breadcrumb;