import React, { Component } from "react";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ButtonsBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
        like: 0,
      }
      this.incrementLike = this.incrementLike.bind(this);
  }
  render() {
    return (
      <div className="buttons">
        <button type="button" className="btn">
          Infos
        </button>
        <button type="button" className="btn" onClick={this.incrementLike}>
          <span>{this.state.like}</span>
          <FontAwesomeIcon icon={faThumbsUp} />
        </button>
      </div>
    );
  }

  incrementLike() {
    this.setState({
      like: this.state.like + 1,
    })
  }
}

export default ButtonsBlock;
