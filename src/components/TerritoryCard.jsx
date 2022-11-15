import React, {Component} from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Form from './Form';
class TerritoryCard extends Component{

  render(){
    let button;
    let assignBtn = <Form onChange = {this.props.onChange}/>;
    let completeBtn = (
      <Popup trigger={<button  className="veiwButton">Complete</button>} modal>
      {close => (
        <div>
        <h2>Are you sure you want to Complete this Territory?</h2>
        <div style={{display:'inline-block'}}>
          <button className="veiwButton" onClick = {()=>this.props.onComplete()}>Complete</button>
          <button className="veiwButton" onClick = {close} style={{backgroundColor:"red"}}>Cancel</button>
        </div>
        </div>
      )}
      </Popup>);

    if(this.props.isAssigned){
      button = completeBtn;
    }else{
      button = assignBtn;
    }

    return(
        <div className="cardContainer">
          <div className="mapContainer">
            <img className="mapImage" src ={this.props.card.imgrc}/>
          </div>
          <div className="territoryInfoContainer">
          <h1>{this.props.card.tid}</h1>
          <h4>Current Publisher: {this.props.card.publisher}</h4>
          <h4>Date Assigned: {this.props.card.dateAssigned}</h4>
          </div>
          <div className="cardInfoContainer">

          <Popup trigger={<button  className="veiwButton">Veiw Record</button>} modal>
            <h1>Record:</h1>
            {this.props.card.record.map(item =>
              <h3 key = {this.props.card.record.indexOf(item)}>{item}</h3>
            )}
          </Popup>

          {button}
          </div>
        </div>
    );
  }
}
export default TerritoryCard;
