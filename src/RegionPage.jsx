import { useParams } from "react-router-dom";

function RegionPage() {
  const { id } = useParams();

  return (
    <div style={{ padding: "40px" }}>
      <h1>منطقة {id}</h1>
      <p>محتوى خاص بالمنطقة فقط.</p>
    </div>
  );
}

export default RegionPage;
