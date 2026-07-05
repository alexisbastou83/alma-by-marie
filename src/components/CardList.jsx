import React from "react";
import Card from "../containers/Card";
import AttachCardList from "./AttachCardList";

class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      position: {
        x: 0,
        y: 0,
      },
      displayed_card: -1,
    }
  }

  setShow = (event, bool, cardIndex) => this.setState({
    show: bool,
    position: {
      x: event.clientX,
      y: event.clientY,
    },
    displayed_card: cardIndex+1,
  })

  render() {
    const cardComponents = this.props.data.map((item, i) => {
      return <Card
        key={i}
        title={item.title}
        description={item.description}
        image={item.image}
        additional_images={item.additional_images}
        setShow={(event, bool) => this.setShow(event, bool, i)}
      />
    });
    return (
      <>
        {cardComponents}
        {this.state.show && (
          <div
            className='bg-white-90 border-box dib br3 pa2 bw2 shadow-5 mw5'
            style={{
              position: 'fixed',
              left: this.state.position.x - 15,
              top: this.state.position.y - 15,
              zIndex: 9999,
            }}
          >
            <AttachCardList setShow={this.setShow} n={this.state.displayed_card} images={this.props.data[this.state.displayed_card-1].additional_images}/>
          </div>
        )
        }
      </>
    );
  }
}

export default CardList;