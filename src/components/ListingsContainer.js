import React from "react";
import ListingCard from "./ListingCard";
// import ListingCard from "./ListingCard";

function ListingsContainer({ listings, handleDelete }) {
  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} onDelete={handleDelete}/>
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
