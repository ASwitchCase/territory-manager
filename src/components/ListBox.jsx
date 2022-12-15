import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Territory from './Territory';
import SearchBar from './SearchBar';
class ListBox extends Component{
  state ={
    contents: this.props.contents
  }

  handleTerritoryDelete = (tid) =>{
    const contents = this.state.contents.filter(item => item.tid !== tid);
    this.setState({contents});
    this.props.onUpdateList(tid);
  };

  handleUpdateContent = (contents) =>{
    this.setState({contents});
  };

  render(){
    return(
      <React.Fragment>
        <div className="listBox" style={{width:'45%'}}>
          <div className="listBoxTitle">
            <h1>{this.props.title}</h1>
            <SearchBar contents={this.state.contents} onUpdateContent={this.handleUpdateContent}/>
          </div>

          <div className="scrollBox">
          {this.state.contents.map(item =>
            <Territory
              key = {item.tid}
              tid = {item.tid}
              publisher = {item.publisher}
              date = {item.dateAssigned}
              onDelete = {this.handleTerritoryDelete}
              onCurrentUpdate = {this.props.onCurrentUpdate}
              />
          )}
          </div>

        </div>
      </React.Fragment>
    );
  }
}
export default ListBox;
