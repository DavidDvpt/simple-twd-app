import React from 'react';

class Character extends React.Component {
    render() {
        const figCaptionStyle = {
            
        }
        return (
            <div>
                <figure>
                    <figcaption>{this.props.firstName + " " + this.props.lastName}</figcaption>
                    <img src={this.props.image} alt={this.props.firsName + " " + this.props.lastName} />
                </figure>
            </div>
        )
    }
}

export default Character