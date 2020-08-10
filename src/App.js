import React, { Component } from 'react';
import Searchbox from './Searchbox';
import Scroll from './Scroll';
import Cardlist from './Cardlist';
import { robots } from './robots';
import './App.css'

class App extends Component {
	constructor() {
	  super()
		this.state= {
	robots: robots,
	searchfield: ''
      }
}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
    }

	render() {
		const filteredRobots = this.state.robots.filter(robots => {
       	  return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
     return (
	    <div className='tc'>
		 <h1> RoboFriends</h1>
		 <Searchbox searchChange={this.onSearchChange} />
		 <Scroll>
         <Cardlist robots={filteredRobots} />
         </Scroll>
        </div>

		);
     }
}
 export default App;