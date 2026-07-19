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
        n={i+1}
        title={item.title}
        description={item.description}
        images={item.images}
        setShow={(event, bool) => this.setShow(event, bool, i)}
      />
    });
    return (
      <>
        {cardComponents}
      </>
    );
  }
}

export default CardList;