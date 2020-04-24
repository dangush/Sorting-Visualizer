import React from "react";
import "./SortingVisualizer.css";
import { bubbleSortAlgo } from "../sortingAlgorithms/sortingAlgorithms.js";

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

  bubbleSort = () => {
    const bars = document.getElementsByClassName("array-bar");
    const changes = bubbleSortAlgo(this.state.array);
    for (let i = 0; i < changes.length; i++) {
      setTimeout(() => {
        let barOneStyle = bars[changes[i][0]].style;
        console.log("This is " + barOneStyle.height);
        let barTwoStyle = bars[changes[i][1]].style;
        console.log("The second is " + barTwoStyle.height);
        let temp;

        barOneStyle.backgroundColor = "red";
        barTwoStyle.backgroundColor = "green";
        temp = barOneStyle.height;
        console.log("got here");
        barOneStyle.height = barTwoStyle.height;
        barTwoStyle.height = temp;

        barOneStyle.backgroundColor = "blue";
        barTwoStyle.backgroundColor = "blue";
      }, i * 1);
    }
  };

  swap(one, two) {
    let temp = one;
    one = two;
    two = temp;

    return one, two;
  }

  testSortAlgo = () => {
    const sortedArray = this.state.array.slice().sort((a, b) => a - b);
    const bubbleSort = bubbleSortAlgo(this.state.array);
    if (sortedArray.length !== bubbleSort.length) return false;
    for (let i = 0; i < sortedArray.length; i++) {
      if (sortedArray[i] !== bubbleSort[i]) {
        console.log("NOPE");
        return false;
      }
    }
    console.log("NICE");
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
          <button className="button" onClick={this.bubbleSort}>
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
