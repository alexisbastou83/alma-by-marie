import React from "react";
import Scroll from "../components/Scroll";
import AttachCard from "../components/AttachCard";

class ScrollCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {n, main_image, additional_images } = this.props;
    return (
      <div style={{
        display: 'flex',
        overflowX: 'auto',
        scrollSnapType: 'x mandatory',
        WebkitOverflowScrolling: 'touch',
        width: '100%',
        aspectRatio: '1 / 1',
      }}>
        <img alt='photo' src={`./creations/${main_image}`} style={{
          width: '100%',
          height: '100%',
          flexShrink: '0',
          scrollSnapAlign: 'start',
          objectFit: 'cover',
        }}/>
        {
          this.props.additional_images.map((image, index) => (
            <img alt='photo' src={`./creations/card${n}/${image}`} style={{
              width: '100%',
              height: '100%',
              flexShrink: '0',
              scrollSnapAlign: 'start',
              objectFit: 'cover',
            }}/>
          ))
        }
      </div>
    );
  }
}

export default ScrollCard;