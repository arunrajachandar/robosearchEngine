import React,{Component} from 'react';

 import CardList from '../components/CardList';

import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      robots : [],
      searchField : ''
    }
  }
onSearchChange=(evt)=>{
    this.setState({searchField: evt.target.value})

}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(users => this.setState({robots: users}));
}

  render(){
    const {robots, searchField} = this.state;
   const filteredRobots = robots.filter(robots =>{
    return robots.name.toLowerCase().includes(searchField.toLowerCase());
  }) 
   if (robots.length === 0){
    return <h1>Loading</h1>;
   }
   else{
    return (

    <div className="tc">
    <h1>RoboFriends</h1>
    <SearchBox SearchChange = {this.onSearchChange}/>
    <Scroll>
    <CardList robots = {filteredRobots}/>
    </Scroll>
       </div>
  );}
}
}

export default App;
