import React from "react";
import "../css/twd.css";

class Character extends React.Component {

  render() {
    const { firstName, lastName, image, actor } = this.props;
    return (
      <div className="characterBloc">
        <figure>
          <figcaption>{firstName + " " + lastName}</figcaption>
          <img src={image} alt={firstName + " " + lastName} />
        </figure>
        <div className="actorBloc">
          <p className="actor">Acteur: {actor}</p>
        </div>
        <div className="buttons">
            <button>Infos</button><button><i className="far fa-thumbs-up fa-lg"></i></button>
        </div>
        {/* <div className="descriptionBloc">
          <p></p>
        </div> */}
      </div>
    );
  }
}

export default Character;