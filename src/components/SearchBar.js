import React, {Component,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';


function SearchBar(props){
  const [data, setData] = useState("");
  const [contents,setContent] = useState(props.contents);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onUpdateContent(contents.filter(item => item.tid === data || item.publisher === data));
  };

  return(
    <div style={{float:'left'}} className="search-container">
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
