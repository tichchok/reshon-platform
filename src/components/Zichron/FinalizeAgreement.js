import React from "react";

export default function FinalizeAgreement({ content }) {
  return (
    <div style={{ padding: "2rem", background: "#fff" }}>
      <h3>Final Agreement</h3>
      <pre style={{ whiteSpace: "pre-wrap" }}>{content}</pre>
    </div>
  );
}
