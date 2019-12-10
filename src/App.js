import React, { useState, useEffect, useRef } from 'react';
import Recipe from './Recipe';
import Nutrition from './Nutrition';
import Ingredients from './Ingredients';

const App = () => {
	//API ID/KEY
	const APP_ID = '8ac29d4b';
	const APP_KEY = '6e2cd4bcf132e11ab01a06f895fee585';

	//Search Function
	const [ recipes, setRecipes ] = useState([]);
	const [ search, setSearch ] = useState('');
	const [ query, setQuery ] = useState('');

	//Nutrition popup
	const [ nutrientHide, toggleNutrition ] = useState([]);

	//Ingredients popup
	const [ ingredientsHide, toggleIngredients ] = useState([]);

	/* 	const [ caloriesLow, setCalorieMin ] = useState('');
	const [ caloriesHigh, setCalorieMax ] = useState(''); */

	const request = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=100`;

	//Get All Recipes
	async function fetchRecipes() {
		const response = await fetch(request);
		const data = await response.json();
		console.log(data);
		setRecipes(data.hits);

		//Setting all the ingredients to be hidden
		ingredientsHide.length = 0;
		for (let i = 0; i < data.hits.length; i++) {
			ingredientsHide.push(false);
		}

		nutrientHide.length = 0;
		for (let i = 0; i < data.hits.length; i++) {
			nutrientHide.push(false);
		}
	}

	//Set state of search
	function getSearch(event) {
		event.preventDefault();
		setSearch(event.target.value);
	}

	//Provide Query
	function getQuery(event) {
		event.preventDefault();
		setQuery(search);
	}

	const initialLoad = useRef(true);
	useEffect(
		() => {
			if (initialLoad.current === true) {
				initialLoad.current = false;
			} else {
				fetchRecipes();
			}
		},
		[ query ]
	);

	//const request = `https://api.edamam.com/search?q=${SEARCH_QUERY}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`

	return (
		<div className="App">
			<form className="search-form" onSubmit={getQuery}>
				<input className="search-box" type="text" placeholder="Search for a recipe!" onChange={getSearch} />
				<button className="search-button" type="submit">
					Search
				</button>
			</form>
			<div className="recipes">
				{recipes.map((recipe, index) => (
					<div className="outer-container">
						<div>
							<Recipe
								name={recipe.recipe.label}
								image={recipe.recipe.image}
								site={recipe.recipe.url}
								toggleNutrition={toggleNutrition}
								ingred={ingredientsHide}
								toggleIngredients={toggleIngredients}
								nutr={nutrientHide}
								index={index}
								ingredients={recipe.recipe.ingredientLines}
							/>
						</div>
						<div>
							{ingredientsHide[index] && (
								<Ingredients
									name={recipe.recipe.label}
									ingredients={recipe.recipe.ingredientLines}
									toggleIngredients={toggleIngredients}
									ingred={ingredientsHide}
									index={index}
								/>
							)}
							{nutrientHide[index] && (
								<Nutrition
									name={recipe.recipe.label}
									toggleNutrition={toggleNutrition}
									nutr={nutrientHide}
									index={index}
								/>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default App;
