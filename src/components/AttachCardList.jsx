import React from "react";
import AttachCard from "./AttachCard";
import Scroll from "./Scroll";

class AttachCardList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div onMouseLeave={() => { this.props.setShow(event, false) }}>
        <Scroll>
          <AttachCard />
          <AttachCard />
          <AttachCard />
          <AttachCard />
        </Scroll>
      </div>
    );
  }
}

export default AttachCardList;