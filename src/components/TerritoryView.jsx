import React, {Component} from 'react';
import NavBar from './NavBar';
import TerritoryCard from './TerritoryCard';

class TerritoryView extends Component{
  state = {
    current:this.props.current,
    tList:this.props.tList
  }

  nextCard = () =>{
    if(this.state.current !== this.props.tList.length -1){
      const current = this.state.current + 1
      this.setState({current});
    }
  };

  prevCard = () =>{
    if(this.state.current !== 0){
      const current = this.state.current - 1
      this.setState({current});
    }
  };

  handleChange = (newPub) =>{
    let d = new Date().toLocaleDateString();
    let newTerr = this.state.tList;
    newTerr[this.state.current].publisher = newPub;
    newTerr[this.state.current].dateAssigned = d;
    newTerr[this.state.current].record.push("Name: " + newPub + " dateAssigned: " + d);
    this.setState({newTerr});
  };

  handleComplete = () =>{
    let newTerr = this.state.tList;
    newTerr[this.state.current].publisher = "No Publisher Assigned";
    newTerr[this.state.current].dateAssigned = "None";
    this.setState({newTerr});
  };

  render(){
    return(
      <React.Fragment>
        <NavBar onCurrentUpdate = { this.props.onCurrentUpdate } onAddTerritory={this.props.onAddTerritory}/>
        <div style={{width:840}}className="listBox">
          <TerritoryCard onComplete={this.handleComplete} isAssigned = {this.state.tList[this.state.current].publisher !== "No Publisher Assigned"} onChange ={this.handleChange} card={this.state.tList[this.state.current]} imrc="nothin"/>
          <button onClick={()=>this.prevCard()} className="nextPrevButton">Previous</button>
          <button onClick={()=>this.nextCard()} className="nextPrevButton">Next</button>
        </div>
      </React.Fragment>
    );

  }
}
export default TerritoryView;
