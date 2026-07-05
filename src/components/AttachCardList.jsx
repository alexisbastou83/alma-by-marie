import React from "react";
import AttachCard from "./AttachCard";
import Scroll from "./Scroll";

class AttachCardList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() { // For each AttachCard, give the path of each image as argument. The AttachCardList should have a specific folder as property
    return (
      <div onMouseLeave={() => { this.props.setShow(event, false) }}>
        <Scroll> 
          {
            this.props.images.map((image, index) => (
              <AttachCard image={`card${this.props.n}/${image}`}/>
            ))
          }
        </Scroll>
      </div>
    );
  }
}

export default AttachCardList;