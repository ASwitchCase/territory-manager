import React, {Component} from 'react';
import Navbar from './NavBar';
import ListBox from './ListBox';

function getNotAssigned(l){
  return l.filter(card => card.publisher === "No Publisher Assigned");
}

function getAssigned(l){
  return l.filter(card => card.publisher !== "No Publisher Assigned");
}

class MainMenu extends Component{
  render(){
    return(
      <React.Fragment>
        <Navbar onCurrentUpdate = { this.props.onCurrentUpdate } onAddTerritory={this.props.onAddTerritory}/>
        <ListBox onCurrentUpdate = { this.props.onCurrentUpdate } onUpdateList = {this.props.onUpdateList} contents={getNotAssigned(this.props.tList)} title="Unassigned Territories"/>
        <ListBox onCurrentUpdate = { this.props.onCurrentUpdate } onUpdateList = {this.props.onUpdateList} contents={getAssigned(this.props.tList)} title="Assigned Territories"/>
      </React.Fragment>
    );
  }
}
export default MainMenu;
