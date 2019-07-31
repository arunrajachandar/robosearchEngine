import React,{Component} from 'react';

class Card extends Component{

	render(){
			const {id,name,email}= this.props;
		return (

			<div className = 'tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
				<img src={`https://www.robohash.org/${id}?200x200`} alt='Broken'/>
				<div>
					<h2>{name}</h2>
					<p>{email}</p>
				</div>
			</div>
			);
	}
}

export default Card;