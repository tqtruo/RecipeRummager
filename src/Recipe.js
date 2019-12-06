import React from 'react';

const Recipe = (props) => {
	return (
		<div className="recipe-container">
			<h3>{props.name}</h3>
			<img src={props.image} />
			<button onClick={() => props.toggleNutrition(true)}>Nutrition</button>
			<button onClick={() => props.toggleIngredients(true)}>Ingredients</button>
			<a href={props.site} target="_blank">
				Recipe
			</a>
		</div>
	);
};

export default Recipe;
