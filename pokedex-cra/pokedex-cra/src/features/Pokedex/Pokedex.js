import React from "react";
import { DetailCard } from "../../components/DetailsCard/DetailsCard";
import { Pokelist } from "../../components/Pokelist/Pokelist";
import "./Pokedex.css";

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: {
        pikachu: {
          name: "pikachu",
          order: "25",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png",
          moves: [
            "mega-punch",
            "thunder-punch",
            "thunder-shock",
            "thunder-bold",
          ],
        },
        bulbasaur: {
          name: "bulbasaur",
          order: "1",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
          moves: ["razor-wind", "swords-dance", "vine-whip", "solar-beam"],
        },
        charmander: {
          name: "charmander",
          order: "4",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png",
          moves: ["flamethrower", "bite", "dragon-rage", "fire-spin"],
        },
        squirtle: {
          name: "squirtle",
          order: "7",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png",
          moves: ["ice-punch", "water-gun", "hydro-pump", "surf"],
        },
      },
      details: { },
    };
    this.changeDetails = this.changeDetails.bind(this);
  }
  changeDetails(u) {
    console.log(u);
    this.setState({
      details: u,
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <h1 className="header-text">Pokedex</h1>
        <div className="container-elements">
        <div className="Pokelist">
          <Pokelist
            pokemons={this.state.pokemons}
            onClick={this.changeDetails}
          />
        </div>
        <div className="DetailCard">
          <DetailCard details={this.state.details}></DetailCard>
        </div>
        </div>
      
      </div>
    );
  }
}

export default Pokedex;
