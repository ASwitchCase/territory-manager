import React from 'react'
import { useState } from "react";
import {Link} from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Edit = (props) => {
    const [publisher,setPublisher] = useState(props.card.publisher);
    const [date, setDate] = useState(props.card.dateAssigned);

    const handleSubmit = (event) =>{
        event.preventDefault();
        props.onEdit(publisher,date);
    }
  return (
    <React.Fragment>
        <Popup trigger={<img className="icon" src='images/task-edit-icon.png'></img>} modal>
        {close => (
            <div>
                <h1>Edit Publisher</h1>
                <input className="enterField" type='text' defaultValue={props.card.publisher} onChange={(e) => setPublisher(e.target.value)}></input>

                <h1>Edit Date</h1>
                <input className="enterField" type='text' defaultValue={props.card.dateAssigned} onChange={(e) => setDate(e.target.value)}></input>

                <a onClick={close}><button className='veiwButton' onClick={handleSubmit}>Submit</button></a>
            </div>
        )}
        </Popup>
            
    </React.Fragment>
  )
}

export default Edit
