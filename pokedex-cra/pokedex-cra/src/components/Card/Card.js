import React from "react";
import './Card.css'
export class Card extends React.Component{
      
    render(){
        return(
         <img className="pokemonIcon" onClick={this.props.onClick} src={this.props.pokemon.image} alt={this.props.pokemon.name}>
         </img>
        )
    }
}