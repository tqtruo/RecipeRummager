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
			<h1>Calories</h1>
			<table>
				<tbody>
					<tr>
						<th>Nutrient</th>
						<th>Amount</th>
						<th>% Daily Value</th>
					</tr>
					<tr>
						<th>Fat</th>
						<th>Amount</th>
						<th>% Daily Value</th>
					</tr>
					<tr>
						<th>Cholesterol</th>
						<th>Amount</th>
						<th>% Daily Value</th>
					</tr>
					<tr>
						<th>Sodium</th>
						<th>Amount</th>
						<th>% Daily Value</th>
					</tr>
					<tr>
						<th>Total Carbohydrates</th>
						<th>Amount</th>
						<th>% Daily Value</th>
					</tr>
					<tr>
						<th>Dietary Fiber</th>
						<th>Amount</th>
						<th>% Daily Value</th>
					</tr>
					<tr>
						<th>Sugar</th>
						<th>Amount</th>
						<th>% Daily Value</th>
					</tr>
					<tr>
						<th>Protein</th>
						<th>Amount</th>
						<th>% Daily Value</th>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Nutrition;
