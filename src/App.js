import React, { Component } from 'react';
import Pokemon from './componentes/Pokemon.jsx';

class App extends Component {
    constructor(){
    super()
    this.state = ({apiResponse:''})
    }

  componentWillMount(){
    fetch('http://pokeapi.co/api/v1/pokedex/1')
    .then((response) => {
      return(response.json())
    })
    .then((response) => {
      this.setState({apiResponse:response})
    })
  }

  render(){
    return(
      <div>
        <h1>Pokemons</h1>
        <Pokemon pokeInfo={this.state.apiResponse.pokemon} />
      </div>
    )
  }
}

export default App;
