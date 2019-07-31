
import React,{Component} from 'react';
import Card from './Card';

class CardList extends Component{
	render(){
			const cardComponent = this.props.robots.map((e,i)=>{
				return 	<Card key={i} id={e.id} name={e.name} email={e.email}/>

			});

		return (
	<div className='tc'>
			{cardComponent}
	</div>
			);
	}
}

export default CardList;
