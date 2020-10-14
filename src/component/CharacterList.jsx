import React from 'react';
import Character from './Character'
import characters from './characterData'

class CharacterList extends React.Component {
    
    render() {
        return characters.map((character) => (
                <Character key={character.lastName} {...character} />
                )
        )}
}

export default CharacterList;