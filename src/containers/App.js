import React,{Component} from 'react';
import {connect} from 'react-redux';
 import CardList from '../components/CardList';


import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

import './App.css';
import {setSearchField, requestRobots} from './action';

const mapStateToProps= state =>{
  return{
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}
const mapDispatchToProps= dispatch =>{
  return{
      onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
      onRequestRobots: ()=> requestRobots(dispatch)

  }
}

class App extends Component {
  // constructor(){
  //   super()
  //   this.state = {
  //     robots : []  }
  // }
// onSearchChange=(evt)=>{
//     this.setState({searchField: evt.target.value})

// }

componentDidMount(){
  this.props.onRequestRobots();
}

  render(){
    const {searchField, onSearchChange, robots, isPending}= this.props;
   const filteredRobots = robots.filter(robots =>{
    return robots.name.toLowerCase().includes(searchField.toLowerCase());
  }) 

    return (isPending) ?
    <h1>Loading</h1>:

    <div className="tc">
    <h1>RoboFriends</h1>
    <SearchBox SearchChange = {onSearchChange}/>
    <Scroll>
    <ErrorBoundary>
      <CardList robots = {filteredRobots}/>
    </ErrorBoundary>
    </Scroll>
       </div>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
