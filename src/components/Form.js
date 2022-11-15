import { useState } from "react";
import {Link} from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Form(props) {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onChange(name);
  };

  return (
    <Popup trigger={<button  className="veiwButton">Assign</button>} modal>
    {close => (
      <div>
        <h1>Enter Publisher Name:</h1>
          <input className="enterField"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <a onClick={close}><button onClick={handleSubmit} className="veiwButton">Submit</button></a>
      </div>
    )}

    </Popup>
  );
}

export default Form;
