import React from "react";
import { useParams } from "react-router-dom";

export default function OfferView() {
  const { id } = useParams();

  return (
    <div style={{ padding: "2rem" }}>
      <h2>🧾 Final Offer View</h2>
      <p>Viewing agreement for Offer ID: {id}</p>
      <p>This will display the generated legal summary (Zichron Devarim).</p>
    </div>
  );
  }
