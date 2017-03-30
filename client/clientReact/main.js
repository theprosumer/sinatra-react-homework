var React 	 = require('react')
var ReactDOM = require('react-dom')
var request	 = require('superagent')
var FormPart = require('./Form')

var MainComponent = React.createClass({					// iniitial status is blank data, ready to receive data
	getInitialState: function(){
		return {data: []}
	},

	componentDidMount: function(){					
		var state = this.state;							// these get set the state of main page
		var self = this;

		request.get('http://localhost:9393/characters') // get the data to put on main page
		.end(function(err, data){
			state.data = data.body;						// the state is now the data you grabbed
			self.setState(state)						// the new state is set
		})
	},

	createCharacter: function(character){			
		var state = this.state;							// this doesn't know about other states
		var self = this;								// so declare the current state is the starting point 
		
		request.post('http://localhost:9393/characters')
		.send('character=' + item)						// sends data to post
		.end(function(err, data){
		})
	},

	render: function(){
		return(
			<div>
				<FormPart onCharacterSubmit={this.createCharacter}/>  //draw from, call it and call create character
				<ul>
					{this.state.data.map(function(character, i){
						return(
							<li key={i}>{character.name}, {character.cartoon}</li>
						)
					})}
				</ul>
			</div>
		)

	}
});

//This renders the shadow DOM items that changed to appear like on the real DOM
React.DOM.render(
	<MainComponent/>, document.getElementById('container')
)

