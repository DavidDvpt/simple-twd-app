import React from "react";
import Character from "./Character";
import characters from "./characterData";
import "../css/twd.css";

class CharacterList extends React.Component {

  render() {
    return (
      <div className="characterList">
        {characters.map((character) => (
          <Character key={character.lastName} {...character} />
        ))}
      </div>
    );
  }
}

export default CharacterList;
