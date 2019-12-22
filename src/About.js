import React from 'react';

const About = () => {
	return (
		<div>
			<div className="summary">
				Recipe Rummager is a website for finding recipes using the Edamam Recipe API.
			</div>
			<div className="learnmore">Click here to learn more!</div>
			<div className="learn">
				<a href="https://github.com/tqtruo/RecipeRummager" target="_blank" rel="noopener noreferrer">
					<img src="Git.png" alt=""></img>
				</a>
			</div>
		</div>
	);
};

export default About;
