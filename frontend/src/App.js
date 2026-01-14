import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import GalleryPage from "./pages/GalleryPage";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-primary">

        {/* Header stays on all pages */}
        <Header />

        {/* Page Content */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>

        {/* Footer stays on all pages */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
