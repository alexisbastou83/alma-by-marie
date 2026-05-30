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
      }
    }
  }

  setShow = (event, bool) => this.setState({
    show: bool,
      position: {
        x: event.clientX,
        y: event.clientY,
      }
  })

  render() {
    const cardComponents = this.props.data.map((item, i) => {
      return <Card
        key={i}
        title={item.title}
        description={item.description}
        image={item.image}
        setShow={this.setShow}
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
            <AttachCardList setShow={this.setShow}/>
          </div>
        )
        }
      </>
    );
  }
}

export default CardList;