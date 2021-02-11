import React from "react";
import StarWarsCharacter from "./StarWarsCharacter"

export default class StarWarsPeople extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        this.loadData = this.loadData.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }
    render() {
        return (<table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Altura</th>
                    <th>Masa</th>
                    <th>Color de pelo</th>
                    <th>Color de piel</th>
                    <th>Color de ojos</th>
                    <th>Año de nacimiento</th>
                    <th>Género</th>
                </tr>
            </thead>
            <tbody>
                {this.state.data.map(character =>
                    <StarWarsCharacter character={character} />
                )}
            </tbody>
        </table>);
    }

    async loadData() {
        let response = await fetch("https://swapi.dev/api/people/");
        let parsedResponse = await response.json();
        console.log(parsedResponse);
        this.setState({
            data: parsedResponse.results
        });
    }
}