import React from "react";
import "./SortingVisualizer.css";

class SortingVisualizer extends React.Component {
  state = {
    array: [],
  };

  componentDidMount() {
    this.resetArray();
  }

  resetArray = () => {
    const array = [];
    for (let i = 0; i < 300; i++) {
      array[i] = getRandomArbitrary(5, 600);
    }
    this.setState({ array });
  };

  render() {
    const { array } = this.state;
    return (
      <div>
        <div className="array-container">
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{ height: `${value}px` }}
            ></div>
          ))}
        </div>
        <div className="button-container">
          <button className="button" onClick={this.resetArray}>
            Generate New Array
          </button>
          <button className="button" onClick={this.resetArray}>
            Bubble Sort
          </button>
          <button className="button" onClick={this.resetArray}>
            Merge Sort
          </button>
          <button className="button" onClick={this.resetArray}>
            Insertion Sort
          </button>
        </div>
      </div>
    );
  }
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default SortingVisualizer;
