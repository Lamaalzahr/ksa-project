import { useParams } from "react-router-dom";

function RegionPage() {
const { name } = useParams();

return (
<div>
<h1>أهلاً بك في منطقة: {name}</h1>
</div>
);
}

export default RegionPage;
