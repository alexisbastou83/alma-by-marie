import React from "react";
import ScrollCard from "./ScrollCard";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, description, images } = this.props;
    return (
      <>
        <div
          className='bg-white-70 border-box dib br3 pa3 ma2 bw2 shadow-5'
          style={{ maxWidth: "332px" }}
        >
          <ScrollCard title={title} images={images}/>
          <h2 style={{margin: '0px 0px 24px 0px'}}>{title}</h2>
          <p>{description}</p>
        </div>
      </>
    );
  }
}

export default Card;