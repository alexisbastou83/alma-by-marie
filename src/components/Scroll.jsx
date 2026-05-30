import React from 'react'

class Scroll extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div style={{overflowY: 'scroll', border: '1px solid black', height: '400px'}}>
				{this.props.children}
			</div>
		);
	}
}


export default Scroll