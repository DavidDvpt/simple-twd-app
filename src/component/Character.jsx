import React from "react";
import "../css/twd.css";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Character extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      like: 0,
    }
    this.incrementLike = this.incrementLike.bind(this);
  }
  
  render() {
    const { firstName, lastName, image, actor } = this.props;
    return (
      <div className="characterBloc">
        <figure className="margin-b10">
          <figcaption>{firstName + " " + lastName}</figcaption>
          <img src={image} alt={firstName + " " + lastName} />
        </figure>
        <div className="actorBloc margin-b10">
          <p className="actor">Acteur: {actor}</p>
        </div>
        <div className="buttons">
            <button type="button" className="btn">Infos</button>
            <button type="button" className="btn" onClick={this.incrementLike}><span>{this.state.like}</span><FontAwesomeIcon icon={faThumbsUp} /></button>
        </div>
        {/* <div className="descriptionBloc">
          <p></p>
        </div> */}
      </div>
    );
  }

  incrementLike() {
    this.setState({
      like: this.state.like + 1,
    })
  }
}

export default Character;