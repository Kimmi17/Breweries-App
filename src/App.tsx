import { BrowserRouter, Routes, Route } from "react-router-dom";
import BreweryDetailPage from "./pages/BreweryDetailPage";
import HomePage from "./pages/ HomePage";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage searchTerm={searchTerm} />} />
            <Route path="/breweries/:id" element={<BreweryDetailPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
