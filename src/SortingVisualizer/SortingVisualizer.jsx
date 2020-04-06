import React from "react";
import "./SortingVisualizer.css";

class SortingVisualizer extends React.Component {
  state = {
    array: [],
  };

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < 100; i++) {
      array[i] = getRandomArbitrary(5, 800);
    }
    this.setState({ array });
    console.log({ array });
  }

  render() {
    const { array } = this.state;
    return (
      <>
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{ height: `${value}px` }}
          ></div>
        ))}
      </>
    );
  }
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default SortingVisualizer;
