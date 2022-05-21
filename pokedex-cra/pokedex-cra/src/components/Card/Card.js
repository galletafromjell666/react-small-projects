import React from "react";

export class Card extends React.Component{
      
    render(){
        return(
         <img onClick={this.props.onClick} src={this.props.pokemon.image} alt={this.props.pokemon.name}>
         </img>
        )
    }
}