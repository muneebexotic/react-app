import React, { Component } from "react";

 class Counter extends Component {
//   state = {
//     value: this.props.counter.value,
//     imageURL: "https://picsum.photos/200",
//     tags: [],
//   };

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p> There are no tags </p>;

  //   return (
  //     <ul>
  //       {" "}
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}{" "}
  //     </ul>
  //   );
  // }


  // handleIncrement = () => {
  //  this.setState({ value: this.state.value + 1} ); 
  // };



  render() {
    return (
      <div>

       <h4> Counter #{this.props.counter.id} </h4>
        <span style={{ fontSize: 20 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => {this.props.onIncrement(this.props.counter)}}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => {this.props.onDecrement(this.props.counter)}}
          className="btn btn-secondary btn-sm ml-2"
        >
          Decrement 
        </button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm ml-2"> Delete </button>
        {/* <div>
          {this.state.tags.length === 0 && 'Please create a new tags'}
          {this.renderTags()}
          </div> */}
      </div>
    );
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
 }

export default Counter;
