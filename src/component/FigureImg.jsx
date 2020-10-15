import { Component } from "react";
import React from "react";

class FigureImg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
      const {firstName, lastName, image} = this.props
    return (
      <figure className="margin-b10">
        <figcaption>{firstName + " " + lastName}</figcaption>
        <img src={image} alt={firstName + " " + lastName} />
      </figure>
    );
  }
}

export default FigureImg;
