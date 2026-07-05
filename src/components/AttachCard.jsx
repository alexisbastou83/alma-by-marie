import React from "react";

class AttachCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // The path to the picture should be given as a source here
    return (
      <>
          <img alt='photo' src={`./creations/${this.props.image}`}/>
      </>
    );
  }
}

export default AttachCard;