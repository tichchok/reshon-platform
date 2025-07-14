import React from "react";
import { useNavigate } from "react-router-dom";

export default function SmartOfferPreview() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "2rem" }}>
      <h2>📄 Smart Zichron Generator</h2>
      <p>This is where the buyer enters offer terms.</p>
      <button onClick={() => navigate("/zichron/offer/123")}>
        Preview Final Offer
      </button>
    </div>
  );
}
