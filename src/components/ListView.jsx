import React, {Component} from 'react';
import NavBar from './NavBar';
import ListBox from './ListBox';

class ListView extends Component{
  render(){
    return(
      <React.Fragment>
        <NavBar onCurrentUpdate = { this.props.onCurrentUpdate } onAddTerritory={this.props.onAddTerritory}/>
        <ListBox onCurrentUpdate = { this.props.onCurrentUpdate } onUpdateList = {this.props.onUpdateList} contents={this.props.tList} title="Territory List"/>
      </React.Fragment>
    );

  }
}
export default ListView;
