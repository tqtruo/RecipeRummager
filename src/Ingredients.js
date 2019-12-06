import React from 'react';

const Ingredients = (props) => {
	return (
		<div className="ingredients">
            <ul>
                {
                    props.ingredients.map((ingredient, index) =>(
                        <li key={index}>
                            {ingredient}
                        </li>
                    ))
                }
            </ul>
		</div>
	);
};

export default Ingredients;