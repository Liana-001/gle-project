import { BrowserRouter, Routes, Route } from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import AddArticlePage from "./pages/AddArticlePage";
import AdminDashboard from "./pages/admindashboard";
import FashionPage from "./pages/FashionPage";
import FashionProducts from "./pages/FashionProducts";
import HomePage from "./pages/HomePage";
import JewelryPage from "./pages/JewelryPage";
import LandingPage from "./pages/LandingPage";
import LibraryPage from "./pages/LibraryPage";
import MediaPage from "./pages/MediaPage";
import NewArrival from "./pages/Newarrival";
import ProductDetail from "./pages/Product-detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/fashion" element={<FashionPage />} />
        <Route path="/fashion-products" element={<FashionProducts />} />
        <Route path="/jewelry" element={<JewelryPage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/media" element={<MediaPage />} />
        <Route path="/new-arrivals" element={<NewArrival />} />
        <Route path="/product-details" element={<ProductDetail />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/add-article" element={<AddArticlePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

