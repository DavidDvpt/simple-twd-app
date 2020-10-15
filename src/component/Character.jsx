import React from "react";
import "../css/twd.css";
import FigureImg from "./FigureImg";
import ActorBloc from "./ActorBloc";
import ButtonsBlock from "./ButtonsBloc";
import DescriptionBloc from "./DescriptionBloc";

class Character extends React.Component {
  constructor (props) {
    super(props)
    this.state = { 
      display: false,
    }
    this.displayDescription = this.displayDescription.bind(this)
  }
  
  render() {
    const { firstName, lastName, image, actor } = this.props;
    return (
      <div className="characterBloc">
        <FigureImg { ...this.props } />
        <ActorBloc { ...this.props } />
        {this.state.display? <DescriptionBloc { ...this.props } /> : null}
        <ButtonsBlock { ...this.props } display = {this.displayDescription } />
      </div>
    );
  }

  displayDescription() {
    this.setState(
      {display: !this.state.display}
    )
  }
}

export default Character;