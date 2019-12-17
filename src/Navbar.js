import React from 'react';

const Navbar = (props) =>{

    return (
        <div>
            <form className="search-form" onSubmit={props.getQuery}>
				<input className="search-box" type="text" placeholder="Search for a recipe!" onChange={props.getSearch} />
				<button className="search-button" type="submit">
					Search
				</button>
			</form>
        </div>
    )
}

export default Navbar;