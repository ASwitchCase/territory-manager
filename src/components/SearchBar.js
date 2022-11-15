import React, {Component,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';

function SearchBar(props){
  const [data, setData] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onCurrentUpdate(data);
  };

  return(
    <div className="search-container">
        <input className="enterField"
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder="Search Territory/Publisher"
          name="search"
        />
        <button onClick={handleSubmit} style ={{backgroundColor:'#F6AEE1'}} className="veiwButton">Search</button>
    </div>
  );
}

export default SearchBar;
