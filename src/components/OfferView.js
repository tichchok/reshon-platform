import React from 'react';
import { useParams } from 'react-router-dom';

const offerData = {
  1: {
    title: 'Offer for 3BR in Ramat Gan',
    terms: [
      'Total Offer: ₪2,300,000',
      'Move-in date: Oct 1, 2025',
      'Payment: 10% deposit on signing, 90% at closing',
      'Contingency: Subject to bank mortgage approval',
    ]
  },
  2: {
    title: 'Loft Offer in Tel Aviv',
    terms: [
      'Total Offer: ₪4,500,000',
      'Move-in date: ASAP',
      'Payment: 100% cash on closing',
      'Contingency: None'
    ]
  }
};

export default function OfferView() {
  const { id } = useParams();
  const offer = offerData[id];

  if (!offer) {
    return <p>Offer not found.</p>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>{offer.title}</h2>
      <ul>
        {offer.terms.map((term, idx) => (
          <li key={idx}>{term}</li>
        ))}
      </ul>
    </div>
  );
}
