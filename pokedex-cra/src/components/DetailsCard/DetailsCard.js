import React from "react";
import "./DetailsCard.css";
import { LoadingCard } from "../LoadingCard/LoadingCard";
export class DetailCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tets: "uwu",
    };
  }
  render() {
    const leftText = {
      textAlign: "left",
      margin: "20px",
    };
    return (
      <>{this.props.details.name ?  <div style={{ margin: "3%" }}>
      <h3 style={leftText}>Name: {this.props.details.name}</h3>
      <h3 style={leftText}>Order: {this.props.details.order}</h3>
      
      <h3 style={leftText}>Moves:</h3>
      {this.props.details.moves !== undefined && (
        <ul>
          {this.props.details.moves.map((move) => (
            <li style={leftText} key={move}>{move}</li>
          ))}
        </ul>
      )}
    </div> : <LoadingCard/> }</>
     
    );
  }
}
