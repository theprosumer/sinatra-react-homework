var React 	 = require('react')
var ReactDOM = require('react-dom')
var request	 = require('superagent')
var FormPart = require('./Form')

var MainComponent = React.createClass({					// iniitial status is blank data, ready to receive data
	getInitialState: function(){
		return {loggedIn: false, username: ''}
			console.log('loggedIn:', loggedIn)
	},

	componentDidMount: function(){						// called after render				
		var state = this.state;							// these get set the state of main page
		var self = this;
			console.log('state:',state, ' self:',self)
		request.get('http://localhost:9393/characters') // get the data to put on main page
		.end(function(err, data){
			state.data = data.body;						// the state is now the data you grabbed
			self.setState(state)						// the new state is set render is called
		})
	},

	createCharacter: function(character){			
		var state = this.state;							// this doesn't know about other states
		var self = this;								// so declare the current state is the starting point 
			console.log('state:',state, ' self:',self)
		request.post('http://localhost:9393/characters')
		// .type('form') use this so u dont need parse
		// send({title: item})
		console.log(data.body)
		// state.data = data.body;
		.send('character=' + item)	//don't need		// sends data to post
		.end(function(err, data){
		})
	},

	getLoginInfo: function(isLoggedIn, username){		// validates user is logged in 
		console.log('isLoggedIn:',isLoggedIn, username)
		var state = this.state;							// declare current state so it can be saved
		state.loggedIn = isLoggedIn;					// set state to logged in
		state.username = username;						// set state to username entered
		state.mainPage = true 							// allow user to proceeed to main
		this.setState(state)							// sets the new state 
	},
})	

var UserLogin = React.createClass({					// component to handle pseudo-login form
	getInitialState: function() {					// init ready to enter a username
		return {username: ''}						
			console.log('ready for username')
	},

	handleInput: function(event){					// allows you to type into form
		var state = this.state;
		
		state.username = event.target.value; 
		this.setState(state) 
	},

	handleLogin: function(event){					//	validate login so you can send that change in state up
		this.props.getLoginInfo(true, this.state.username)
	},

	render: function(){								// render the login on the main
		return(
			<div>
				<form>
					<input onChange={this.handleInput} type="text" name="username" placeholder="Username"/>
					<button onClick={this.handleLogin}>Submit</button>
				</form>
			</div>
		)
	},

	updateValue: function(){
		this.setState
	}
})

var MainPage = React.createClass({
	getInitialState: function(){
		return {characters: []}
		console.log('ready for characters')
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

		var characters = this.props.characters.map(function(character, i){
			return (
				<div>
					<h3>Cartoon Characters and Shows</h3>
						return(
							<li keys={i}> {character.name} is a character on {character.cartoon}</li>
						)	
				</div>
			)
		})
	}
})


//This renders the shadow DOM items that changed to appear like on the real DOM
ReactDOM.render(
	<MainComponent/>, document.getElementById('container')
)

