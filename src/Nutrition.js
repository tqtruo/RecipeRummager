import React from 'react';

const Nutrition = (props) => {
	return (
		<div className="nutrition-list">
            <h1>Calories</h1>
            <table>
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
              

            </table>
		</div>
	);
};

export default Nutrition;