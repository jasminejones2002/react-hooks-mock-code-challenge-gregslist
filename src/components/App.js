import React, { useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import ListingCard from "./ListingCard";

function App() {
  const [listings, setListings] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

  const handleDelete = (id) => {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(() => {
      setListings(prevListings => prevListings.filter(listing => listing.id !== id))
    })
    .catch(error => {
      console.log('Error deleting listing:', error)
    })
  }

  const handleSearch = (query) => {
    setSearchQuery(query)
  }
  
  useEffect(() => {
    fetch(' http://localhost:6001/listings')
    .then(res => res.json())
    .then(data => setListings(data))
  }, [])

  useEffect(() => {
    const filteredListings = listings.filter(listing => listing.description.includes(searchQuery))
    setListings(filteredListings)
  }, [searchQuery])

  return (
    <div className="app">
      <Header handleSearch={handleSearch} />
      <ListingsContainer
       listings={listings}
       handleDelete={handleDelete} 
       />
    </div>
  );
}

export default App;
