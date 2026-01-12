import Navbar from "./navbar";
import Footer from "./Footer";
import "./App.css";

//import InfoCards from "./InfoCards";
//import MapSection from "./MapSection";

import { Routes, Route } from "react-router-dom";
import RegionPage from "./RegionPage";

import MainLayout from "./layouts/MainLayout";
import RegionLayout from "./layouts/RegionLayout";
import HomePage from "./HomePage";
import Riyadh from "./pages/Riyadh";

function App() { 
return (
<>
<Navbar />


<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/region/riyadh" element={<Riyadh />} />


<Route element={<RegionLayout />}>
<Route path="/region/:id" element={<RegionPage />} />
</Route>
</Routes>


<Footer />

</>
);
} 
export default App;

