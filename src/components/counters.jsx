import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
 

  render() {
    const { counters, onDelete, onIncrement , onDecrement} = this.props;
    return (
      <div>
       
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement = {onDecrement}
            counter={counter}
          >
            
          </Counter>
        ))}
         <button
          onClick={this.props.onReset}
          className="btn btn-md btn-primary ml-5 mt-2"
        >
          Reset Now 
        </button>
      </div>
    );
  }
}

 
export default Counters;

