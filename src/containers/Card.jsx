import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, description, image } = this.props;
    const image_path = `./creations/${image}`;
    return (
      <>
        <div
          className='bg-white-70 border-box dib br3 pa3 ma2 grow bw2 shadow-5 mw5'
          onPointerDown={(event) => {
            this.props.setShow(event, true)
          }}
          // onPointerOut={(event) => {
          //   this.props.setShow(event, false)
          // }}
        >
          <img alt={title} src={image_path} />
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </>
    );
  }
}

export default Card;