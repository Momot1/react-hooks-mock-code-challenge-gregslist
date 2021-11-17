import React, {useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [searchedResult, setSearchedResult] = useState("")

  function updateSearch(search){
    setSearchedResult(search)
  }
  return (
    <div className="app">
      <Header onSearchChange = {updateSearch}/>
      {<ListingsContainer search = {searchedResult}/>}
    </div>
  );
}

export default App;
