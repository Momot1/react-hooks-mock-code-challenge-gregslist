import React, {useState} from "react";

function Search({onSearchChange}) {
  const [search, setSearch] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    onSearchChange(search);
  }

  function handleSearchChange(search){
    setSearch(search)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(e) => handleSearchChange(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;