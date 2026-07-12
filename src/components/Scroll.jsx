import React from 'react'

class Scroll extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div style={{display: 'flex', overflowX: 'scroll', border: '1px solid black', height: '300px', margin: '0px 0px 20px 0px'}}>
				{this.props.children}
			</div>
		);
	}
}


export default Scroll