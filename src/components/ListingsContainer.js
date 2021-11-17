import React, {useState, useEffect} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({search}) {
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(resp => resp.json())
      .then(listings => {
        setListings(listings)
      })
  }, [])

  const listingElements = listings
  
    .filter(item => {
      if(search!==""){
        return item.description.toLowerCase()
          .includes(search.toLowerCase())
      } else{
        return item
      }})
  
  
    .map(listing => <ListingCard key={listing.id} listing = {listing} onDeleteListing={removeListing}/>)

  function removeListing(listing){
    const updatedListings = listings.filter(item => item.id !== listing.id)
    setListings(updatedListings)
  }

  return (
    <main>
      <ul className="cards">
        {listingElements}
      </ul>
    </main>
  );
}

export default ListingsContainer;
