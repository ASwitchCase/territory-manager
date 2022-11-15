import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
import AddTerritory from './AddTerritory';
import SearchBar from './SearchBar';

class Navbar extends Component{
  render(){
    return(
        <React.Fragment>
          <div className="topnav">
            <Link className="active" to="/">Home</Link>
            <AddTerritory onAddTerritory={this.props.onAddTerritory}/>
            <Link to="/ListView">Territory List</Link>
            <button className="saveButton">Save</button>
          </div>
        </React.Fragment>
    );
  }
}
export default Navbar;
