import React from "react";

export default class StarWarsCharacter extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.character.name}</td>
                <td>{this.props.character.height}</td>
                <td>{this.props.character.mass}</td>
                <td>{this.props.character.hair_color}</td>
                <td>{this.props.character.skin_color}</td>
                <td>{this.props.character.eye_color}</td>
                <td>{this.props.character.birth_year}</td>
                <td>{this.props.character.gender}</td>
            </tr>
        );
    }
}