import React from "react";
import "../css/twd.css";
import FigureImg from "./FigureImg";
import ActorBloc from "./ActorBloc";
import ButtonsBlock from "./ButtonsBloc";
import DescriptionBloc from "./DescriptionBloc";

class Character extends React.Component {
  constructor (props) {
    super(props)
    this.state = { }
  }
  
  render() {
    const { firstName, lastName, image, actor } = this.props;
    return (
      <div className="characterBloc">
        <FigureImg { ...this.props } />
        <ActorBloc { ...this.props } />
        <DescriptionBloc { ...this.props } />
        <ButtonsBlock { ...this.props } />
      </div>
    );
  }
}

export default Character;