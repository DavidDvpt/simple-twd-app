import React from "react";
import "../css/twd.css";

class Character extends React.Component {
  render() {
    return (
      <div className="characterBloc">
        <figure>
          <figcaption>
            {this.props.firstName + " " + this.props.lastName}
          </figcaption>
          <img
            src={this.props.image}
            alt={this.props.firsName + " " + this.props.lastName}
          />
        </figure>
        <div className="actorBloc">
            <h4>Acteur:</h4>
        </div>
        <div className="descriptionBloc">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptatum commodi temporibus nostrum deserunt autem molestias maiores consectetur, sint exercitationem nisi dolores eligendi vitae eveniet quibusdam illo consequuntur blanditiis amet!</p>
        </div>
      </div>
    );
  }
}

export default Character;
