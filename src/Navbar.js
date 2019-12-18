import React from 'react';

const Navbar = (props) => {
	return (
		<ul>
			<li className="home">Home</li>
			<li className="about">About</li>
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
