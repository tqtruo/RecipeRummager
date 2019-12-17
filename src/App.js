import React, { useState, useEffect, useRef } from 'react';
import Recipe from './Recipe';
import Nutrition from './Nutrition';
import Ingredients from './Ingredients';
import Navbar from './Navbar';

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

	//Make background inactive while popup active
	const [ backgroundClass, setClass ] = useState('outer-container');

	//Loading animation
	const [ isLoading, setLoading ] = useState(false);

	/* 	const [ caloriesLow, setCalorieMin ] = useState('');
	const [ caloriesHigh, setCalorieMax ] = useState(''); */

	const request = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=100`;

	//Get All Recipes
	async function fetchRecipes() {
		setLoading(true);
		const response = await fetch(request);
		const data = await response.json();
		setLoading(false);
		console.log(data);
		setRecipes(data.hits);

		//Setting all the ingredients to be hidden
		ingredientsHide.length = 0;
		let newIngred = [];
		for (let i = 0; i < data.hits.length; i++) {
			newIngred.push(false);
		}
		toggleIngredients(newIngred);
		//Setting all nutritioninfo to be hidden
		nutrientHide.length = 0;
		let newNutr = [];
		for (let i = 0; i < data.hits.length; i++) {
			newNutr.push(false);
		}
		toggleNutrition(newNutr);

		setClass('outer-container');
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
			<Navbar getQuery={getQuery} getSearch={getSearch} />
			<div className="recipes">
				{isLoading ? (
					<div className="loading" />
				) : (
					recipes.map((recipe, index) => (
						<div className="outer-container">
							<div className={backgroundClass}>
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
									setClass={setClass}
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
										setClass={setClass}
									/>
								)}
								{nutrientHide[index] && (
									<Nutrition
										name={recipe.recipe.label}
										toggleNutrition={toggleNutrition}
										nutr={nutrientHide}
										index={index}
										setClass={setClass}
										calories={recipe.recipe.calories}
										fatAmount={
											recipe.recipe.totalNutrients.FAT ? (
												recipe.recipe.totalNutrients.FAT.quantity
											) : (
												0
											)
										}
										fatDaily={
											recipe.recipe.totalDaily.FAT ? recipe.recipe.totalDaily.FAT.quantity : 0
										}
										fatAmount={
											recipe.recipe.totalNutrients.FAT ? (
												recipe.recipe.totalNutrients.FAT.quantity
											) : (
												0
											)
										}
										fatDaily={recipe.recipe.totalDaily.FAT.quantity}
										cholAmount={
											recipe.recipe.totalNutrients.CHOLE ? (
												recipe.recipe.totalNutrients.CHOLE.quantity
											) : (
												0
											)
										}
										cholDaily={
											recipe.recipe.totalDaily.CHOLE ? recipe.recipe.totalDaily.CHOLE.quantity : 0
										}
										sodiumAmount={
											recipe.recipe.totalNutrients.NA ? (
												recipe.recipe.totalNutrients.NA.quantity
											) : (
												0
											)
										}
										sodiumDaily={
											recipe.recipe.totalDaily.NA ? recipe.recipe.totalDaily.NA.quantity : 0
										}
										carbAmount={
											recipe.recipe.totalNutrients.CHOCDF ? (
												recipe.recipe.totalNutrients.CHOCDF.quantity
											) : (
												0
											)
										}
										carbDaily={
											recipe.recipe.totalDaily.CHOCDF ? (
												recipe.recipe.totalDaily.CHOCDF.quantity
											) : (
												0
											)
										}
										fiberAmount={
											recipe.recipe.totalNutrients.FIBTG ? (
												recipe.recipe.totalNutrients.FIBTG.quantity
											) : (
												0
											)
										}
										fiberDaily={
											recipe.recipe.totalDaily.FIBTG ? recipe.recipe.totalDaily.FIBTG.quantity : 0
										}
										sugarAmount={
											recipe.recipe.totalNutrients.SUGAR ? (
												recipe.recipe.totalNutrients.SUGAR.quantity
											) : (
												0
											)
										}
										proteinAmount={
											recipe.recipe.totalNutrients.PROCNT ? (
												recipe.recipe.totalNutrients.PROCNT.quantity
											) : (
												0
											)
										}
										proteinDaily={
											recipe.recipe.totalDaily.PROCNT ? (
												recipe.recipe.totalDaily.PROCNT.quantity
											) : (
												0
											)
										}
										servings={recipe.recipe.yield}
									/>
								)}
							</div>
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default App;
