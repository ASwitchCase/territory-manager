import React, {Component} from 'react';
import MainMenu from'./MainMenu';
import { BrowserRouter as Router, Routes,Route,} from "react-router-dom";
import TerritoryView from './TerritoryView';
import ListView from './ListView';

class TMController extends Component{
  state = {
    t_list : [
      {tid:"2A",publisher:"No Publisher Assigned",dateAssigned:"None",record:[],imgrc : "/images/hood.png"},
      {tid:"2B",publisher:"No Publisher Assigned",dateAssigned:"None",record:[],imgrc : "/images/hood.png"},
      {tid:"2C",publisher:"No Publisher Assigned",dateAssigned:"None",record:[],imgrc : "/images/hood.png"},
      {tid:"1A",publisher:"No Publisher Assigned",dateAssigned:"None",record:[],imgrc : "/images/hood.png"},
      {tid:"1B",publisher:"No Publisher Assigned",dateAssigned:"None",record:[],imgrc : "/images/hood.png"},
      {tid:"1C",publisher:"No Publisher Assigned",dateAssigned:"None",record:[],imgrc : "/images/hood.png"},
      {tid:"3A",publisher:"No Publisher Assigned",dateAssigned:"None",record:[],imgrc : "/images/hood.png"},
    ],

    current: 0
  }

  handleListUpdate = (tid) => {
    const t_list = this.state.t_list.filter(item => item.tid !== tid);
    this.setState({t_list});
  };

  handleCurrentUpdate = (tid) => {
    const current = this.state.t_list.map(item => item.tid).indexOf(tid);
    this.setState({current});
    console.log(tid);
  };

  handleAddTerritory = (newPub) => {
    let new_list = this.state.t_list;
    new_list.push(newPub);
    const t_list = new_list;
    this.setState({t_list});
  };

  render(){
    return(
      <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<MainMenu onAddTerritory={this.handleAddTerritory} onCurrentUpdate = {this.handleCurrentUpdate} onUpdateList = {this.handleListUpdate} tList = {this.state.t_list}/>}/>
          <Route exact path="/TerritoryView" element={<TerritoryView onAddTerritory={this.handleAddTerritory} onCurrentUpdate = {this.handleCurrentUpdate} current = {this.state.current} tList={this.state.t_list}/>}/>
          <Route exact path="/ListView" element={<ListView onAddTerritory={this.handleAddTerritory} onCurrentUpdate = {this.handleCurrentUpdate} current = {this.state.current} tList={this.state.t_list}/>}/>
        </Routes>
      </Router>
      </React.Fragment>
    );
  }
}
export default TMController;
