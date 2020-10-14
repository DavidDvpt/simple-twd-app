import React from 'react';
import '../css/twd.css';

class Character extends React.Component {
    render() {
            
        return (
            <div className="characterBloc">
                <figure>
                    <figcaption>{this.props.firstName + " " + this.props.lastName}</figcaption>
                    <img src={this.props.image} alt={this.props.firsName + " " + this.props.lastName} />
                </figure>
            </div>
        )
    }
}

export default Character