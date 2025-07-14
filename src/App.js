import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import SmartOfferPreview from "./components/Zichron/SmartOfferPreview";
import OfferView from "./components/Zichron/OfferView";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/zichron" element={<SmartOfferPreview />} />
        <Route path="/zichron/offer/:id" element={<OfferView />} />
      </Routes>
    </Router>
  );
}

export default App;
