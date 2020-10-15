import React, { Component } from "react";

class ActorBloc extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { actor } = this.props;
    return (
      <div className="actorBloc margin-b10">
        <p className="actor">Acteur: { actor }</p>
      </div>
    );
  }
}

export default ActorBloc;
