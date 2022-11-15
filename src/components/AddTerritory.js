import React, {Component,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Popup from 'reactjs-popup';

function AddTerritory(props){
  const [tid, setTid] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddTerritory({tid:tid,publisher:"No Publisher Assigned",dateAssigned:"None",record:[],imgrc : "/images/hood.png"});
  };

  return(
    <Popup trigger={<a href="#Add Territory">Add Territory</a>} modal>
    {close => (
      <div>
        <h1>Enter Territory Id:</h1>
          <input className="enterField"
            type="text"
            value={tid}
            onChange={(e) => setTid(e.target.value)}
          />
          <a onClick={close}><button onClick={handleSubmit} className="veiwButton">Submit</button></a>
      </div>
    )}

    </Popup>
  );

}

export default AddTerritory;
