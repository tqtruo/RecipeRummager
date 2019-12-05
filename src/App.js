import React, { useState, useEffect, useRef } from 'react';
import Recipe from './Recipe';

const App = () => {
	const APP_ID = '8ac29d4b';
	const APP_KEY = '6e2cd4bcf132e11ab01a06f895fee585';

	const [ recipes, setRecipes ] = useState([]);
	const [ search, setSearch ] = useState('');
	const [ query, setQuery ] = useState('');

	const initialLoad = useRef(true);

	/* 	const [ caloriesLow, setCalorieMin ] = useState('');
	const [ caloriesHigh, setCalorieMax ] = useState(''); */

	const request = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

	async function fetchRecipes() {
		const response = await fetch(request);
		const data = await response.json();
		console.log(data);
		setRecipes(data.hits);
	}

	function getSearch(event) {
		event.preventDefault();
		setSearch(event.target.value);
	}
	function getQuery(event) {
		event.preventDefault();
		setQuery(search);
	}

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
			<div>{recipes.map((recipe) => <Recipe name={recipe.recipe.label} image={recipe.recipe.image} />)}</div>
		</div>
	);
};

export default App;
