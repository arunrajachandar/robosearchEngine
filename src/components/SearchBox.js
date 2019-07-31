
import React,{Component} from 'react';

class SearchBox extends Component{
	render(){

		return(<div className='pa2'>
			 <input type='search' className = 'pa3 b--green ba bg-lightest-blue' placeholder='search robots' onChange ={this.props.SearchChange}/>
			 </div>);
	}
}

export default SearchBox;
