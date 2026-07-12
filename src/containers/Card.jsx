import React from "react";
import ScrollCard from "./ScrollCard";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { n, title, description, image, additional_images } = this.props;
    const image_path = `./creations/${image}`;
    return (
      <>
        <div
          className='bg-white-70 border-box dib br3 pa3 ma2 bw2 shadow-5 mw5'
        >
          <ScrollCard n={n} main_image={image} additional_images={additional_images}/>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </>
    );
  }
}

export default Card;