import React from 'react';
import { Link } from 'react-router-dom';

const offers = [
  { id: 1, title: 'Offer for 3BR in Ramat Gan', summary: '₪2.3M, flexible on move-in' },
  { id: 2, title: 'Loft Offer in Tel Aviv', summary: '₪4.5M, 30-day close, no mortgage' }
];

export default function SmartOfferPreview() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Smart Offers</h1>
      <ul>
        {offers.map((offer) => (
          <li key={offer.id}>
            <Link to={`/offer/${offer.id}`}>
              <strong>{offer.title}</strong> – {offer.summary}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
  }
