import React, {useState} from "react";

function ListingCard({listing, onDeleteListing}) {
  const [emoji, setEmoji] = useState("☆")
  const {description, image, location, id} = listing

  function changeEmoji(){
    emoji === '☆' ? setEmoji('★') : setEmoji('☆')
  }

  function deleteItem(){
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    })
      .then(resp => resp.json)
      .then(() => onDeleteListing(listing))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {emoji === "☆" ? (
          <button className="emoji-button favorite active" onClick={changeEmoji}>{emoji}</button>
        ) : (
          <button className="emoji-button favorite" onClick={changeEmoji}>{emoji}</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={deleteItem}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
