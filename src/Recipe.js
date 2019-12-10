import React from 'react';

const Recipe = (props) => {
	const nutrButton = () => {
		let nutrArray = [];
		for (let i = 0; i < props.nutr.length; i++) {
			if (i === props.index) {
				nutrArray.push(true);
			} else {
				nutrArray.push(false);
			}
		}
		props.toggleNutrition(nutrArray);
		props.setClass('outer-container-inactive');
		console.log('nutr ', props.nutr);
	};

	const ingredButton = () => {
		let ingredArray = [];
		for (let i = 0; i < props.ingred.length; i++) {
			if (i === props.index) {
				ingredArray.push(true);
			} else {
				ingredArray.push(false);
			}
		}
		props.toggleIngredients(ingredArray);
		props.setClass('outer-container-inactive');
		console.log('ingred ', props.ingred);
	};
	return (
		<div className="recipe-container">
			<h3>{props.name}</h3>
			<img src={props.image} />
			<button onClick={() => nutrButton()}>Nutrition</button>
			<button onClick={() => ingredButton()}>Ingredients</button>
			<a href={props.site} target="_blank">
				Recipe
			</a>
		</div>
	);
};

export default Recipe;
