import { BrowserRouter, Routes, Route } from "react-router-dom";
import BreweryDetailPage from "./pages/BreweryDetailPage";
import HomePage from "./pages/ HomePage";
import Navbar from "./components/navbar/Navbar";
import { useState } from "react";
import Footer from "./components/Footer";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <BrowserRouter>
      <div>
        <Navbar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
        <Routes>
          <Route path="/" element={<HomePage searchTerm={searchTerm} />} />
          <Route path="/breweries/:id" element={<BreweryDetailPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
