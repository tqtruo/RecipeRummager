import React from 'react';

const Navbar = (props) => {
	const homeClick = () => {
		document.body.style.background = "url('Food.jpg') repeat";
		document.body.style.backgroundSize = 'cover';
		props.setAbout(false);
		props.setRecipes([]);
	};

	const aboutClick = () => {
		document.body.style.background = "url('Utensils.jpg') repeat";
		document.body.style.backgroundSize = 'cover';
		props.setAbout(true);
	};

	const resultsClick = () => {
		props.setAbout(false);
	};
	return (
		<ul className="navbar-list">
			<li className="home" onClick={() => homeClick()}>
				Home
			</li>
			<li className="about" onClick={() => aboutClick()}>
				About
			</li>
			{props.recipes.length > 0 ? <li className="result" onClick={() => resultsClick()}>Results</li> : ''}
			<li className="searchform">
				<form className="search-form" onSubmit={props.getQuery}>
					<input
						className="search-box"
						type="text"
						placeholder="Search for a recipe!"
						onChange={props.getSearch}
					/>
					<button className="search-button" type="submit">
						Search
						{/* <i className="material-icons">search</i> */}
					</button>
				</form>
			</li>
		</ul>
	);
};

export default Navbar;
