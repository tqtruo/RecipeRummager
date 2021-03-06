import React from 'react';

const Ingredients = (props) => {
	const closeIngred = () => {
		let newIngred = [];
		for (let i = 0; i < props.ingred.length; i++) {
			newIngred.push(false);
		}
		props.toggleIngredients(newIngred);
		props.setClass('outer-container');
	};
	return (
		<div className="ingredients" id="ingred">
			<button onClick={() => closeIngred()}>X</button>
			<h2>{props.name}</h2>
			<ul>{props.ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}</ul>
		</div>
	);
};

export default Ingredients;
