import React from 'react';

export default class Pokemon extends React.Component{

	render(){
	
		let arregloDeElementosHtml = this.props.pokeInfo;
		if(arregloDeElementosHtml){
			var nuevoArreglo = arregloDeElementosHtml.map((nombrePokemon) => {
				return <div> {nombrePokemon.name} </div>
			})
		}

		return(
			<div>{nuevoArreglo}</div>
			)
	}	
}
