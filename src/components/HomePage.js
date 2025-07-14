import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>🏡 Welcome to Reshon</h1>
      <p>Select a tool below to get started:</p>
      <ul>
        <li><Link to="/zichron">📄 Zichron Devarim Generator</Link></li>
        <li><span>✅ Buyer Checklist (Coming Soon)</span></li>
        <li><span>📊 Property Value Estimator (Coming Soon)</span></li>
      </ul>
    </div>
  );
  }
