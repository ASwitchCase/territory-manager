import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Territory extends Component{
  state = {
    tid: this.props.tid,
    publisher: this.props.publisher,
    record:this.props.record,
    dateAssigned: this.props.date
  };

  render(){
    return(
      <React.Fragment>
        <div className="territorContainer">

          <div className="territoryIdContainer">
            <h1>{this.state.tid}</h1>
          </div>

          <div className="territoryInfoContainer">
            <h3>{this.state.publisher}</h3>
            <h5>Date Assigned: {this.state.dateAssigned}</h5>
          </div>
          <Link to ="/TerritoryView"><button onClick={() => this.props.onCurrentUpdate(this.state.tid)} className="veiwButton">Veiw</button></Link>
          <button className="deleteButton" onClick={()=> this.props.onDelete(this.state.tid)}>Delete</button>
        </div>
      </React.Fragment>
    );
  }

}
export default Territory;
