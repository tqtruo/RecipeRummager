import React from 'react';

const Nutrition = (props) => {
	const closeNutr = () => {
		let newNutr = [];
		for (let i = 0; i < props.nutr.length; i++) {
			newNutr.push(false);
		}
		props.toggleNutrition(newNutr);
		props.setClass('outer-container');
	};
	return (
		<div className="nutrition-list" id="nutr">
			<button onClick={() => closeNutr()}>X</button>
			<h2>{props.name}</h2>
			<h3 id="nutrInfo">Nutrition info per serving</h3>
		{/* <h3 id="calories">Calories: {Math.round(props.calories)}</h3> */}
			<table className="nutrTable">
				<tbody>
					<tr>
						<th className = "table-left" >Servings</th>
						<th className = "table-left" >{props.servings}</th>
					</tr>
					<tr >
						<th className = "calories" >Calories</th>
						<th className = "calories" >{Math.round(props.calories/props.servings)}</th>
					</tr>
					<tr>
						<th className = "table-header">Nutrient</th>
						<th className = "table-header">Amount</th>
						<th className = "table-header">% Daily Value</th>
					</tr>
					<tr>
						<th className = "table-left">Fat</th>
						<th className = "table-left">{Math.round(props.fatAmount/props.servings)}g</th>
						<th className = "daily">{Math.round(props.fatDaily/props.servings)}%</th>
					</tr>
					<tr>
						<th className = "table-left">Cholesterol</th>
						<th className = "table-left">{Math.round(props.cholAmount/props.servings)}mg</th>
						<th className = "daily">{Math.round(props.cholDaily/props.servings)}%</th>
					</tr>
					<tr>
						<th className = "table-left">Sodium</th>
						<th className = "table-left">{Math.round(props.sodiumAmount/props.servings)}mg</th>
						<th className = "daily">{Math.round(props.sodiumDaily/props.servings)}%</th>
					</tr>
					<tr>
						<th className = "table-left">Total Carbohydrates</th>
						<th className = "table-left">{Math.round(props.carbAmount/props.servings)}g</th>
						<th className = "daily">{Math.round(props.carbDaily/props.servings)}%</th>
					</tr>
					<tr>
						<th className = "carb-sub">Dietary Fiber</th>
						<th className = "table-left">{Math.round(props.fiberAmount/props.servings)}g</th>
						<th className = "daily">{Math.round(props.fiberDaily/props.servings)}%</th>
					</tr>
					<tr>
						<th className = "carb-sub">Sugar</th>
						<th className = "table-left">{Math.round(props.sugarAmount/props.servings)}g</th>
					</tr>
					<tr>
						<th className = "table-left">Protein</th>
						<th className = "table-left">{Math.round(props.proteinAmount/props.servings)}g</th>
						<th className = "daily">{Math.round(props.proteinDaily/props.servings)}%</th>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Nutrition;
