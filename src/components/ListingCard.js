import React, { useState } from "react";

function ListingCard({ listing, onDelete }) {
  const [isFavorited, setIsFavorited] = useState(false)

  const handleListingDelete = () => {
    onDelete(listing.id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">{listing.price}</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {isFavorited ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite" onClick={() => setIsFavorited(!isFavorited)}>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span>{listing.location}</span>
        <button className="emoji-button delete" onClick={handleListingDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
