var React = require('react')

var FormPart = React.createClass({						// the form starts as an empty form
	getInitialState: function() {
		return {inputValue: ''} 
	},

	handleClick: function(event){						// when the button is clicked
		event.preventDefault();							// stop form from default clearing data
		this.props.onItemSubmit(this.state.inputValue)	// becomes state of main	
	},

	render: function(){									// add form to shadow DOM, handle current state, patch, post
		return(											
			<div>
				<form>
					<input placeholder="Character Name" value={this.state.inputValue} onChange={this.updateValue}/>
					<button onClick={this.handleClick}>Submit!</button>  // button calls handleClick component
				</form>
			</div>		
		)
	},

	updateValue: function(event){
		this.setState({inputValue: event.target.value}) //state becomes value of target event
	}
})

module.exports = FormPart								// export to main component