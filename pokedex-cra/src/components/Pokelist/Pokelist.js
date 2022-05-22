import React from "react";
import { Card } from "../Card/Card";
import "./Pokelist.css";
export class Pokelist extends React.Component {
  constructor(props) {
    super(props);
    this.handleUpdateDetails = this.handleUpdateDetails.bind(this);
  }

  handleUpdateDetails(u) {
    this.props.onClick(u);
  }
  render() {
    return (
      <div className="card-main">
        {Object.keys(this.props.pokemons).map((key) => (
          <Card
            key={key}
            pokemon={this.props.pokemons[key]}
            onClick={(u) => this.handleUpdateDetails(this.props.pokemons[key])}
          ></Card>
        ))}
      </div>
    );
  }
}
